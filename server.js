var express = require('express'),
    app = express(),
    fs = require('fs'),
    request = require('request'),
    mongoose = require('mongoose'),
	http = require('http'),
	cookieParser = require('cookie-parser'),
	bodyParser   = require('body-parser'),


	app.use(bodyParser.json()); 
    app.use(bodyParser.urlencoded({ extended: true }));


	mongoose.connect('mongodb://localhost:27017/telegram');

	eval(fs.readFileSync(__dirname + "/answers.js")+'');
	eval(fs.readFileSync(__dirname + "/questions.js")+'');

	var CardsAgainstBotUserDatabase = mongoose.model('CardsAgainstBotUserDatabase', {
		TelegramUserID: String,
		UserNickname: String,
		BestCardsEver: String
	});

	var CardsAgainstBotGamesDataBase = mongoose.model('CardsAgainstBotGamesDataBase', {
		GameID: String,
		Players: Array,
		CardCzar: String,
		PartyStatus: String,
		GameCreator: String,
		PlayersIDs: Array,
		CurrentQuestion: String,
		Responses: Array
	});
	
	app.post('/CardsAgainstBotPush', function(req, res){
		if (req.body.message.text != undefined && req.body.message.reply_to_message == undefined) {
			var TelegramUserID = req.body.message.from.id;
			var message = req.body.message.text.split(" ");
			if(message[0] == "/start" && message[1] == undefined) {
				console.log("Start");
				CardsAgainstBotUserDatabase.find({ TelegramUserID: TelegramUserID }, function (err, teams){
					if (teams.length == 1) {
						CardsAgainstBotResponse("Hello @" + teams[0].UserNickname + " welcome back!\n\nType /help for available commands.",TelegramUserID);
					} else {
						CardsAgainstBotResponse("You aren't connected yet. Please send /connect to get started.",TelegramUserID);
					}
				});
			} else if (message[0] == "/connect") {
				CardsAgainstBotUserDatabase.find({ TelegramUserID: TelegramUserID }, function (err, teams){
					if (teams.length == 1) {
						CardsAgainstBotResponse("Wut? You are already connected.",TelegramUserID);
					} else {
						CardsAgainstBotResponse("Nice, reply this message with any username.\nThis username will be shown to other users.",TelegramUserID);
					}
				});
			} else if (message[0] == "/help") {
				CardsAgainstBotUserDatabase.find({ TelegramUserID: TelegramUserID }, function (err, teams){
					if (teams.length == 1) {
						CardsAgainstBotResponse("/random - Join on a random game.\n/party - Create e party game.",TelegramUserID);
					} else {
						CardsAgainstBotResponse("Setup your username first. Type /connect.",TelegramUserID);
					}
				});
			} else if (message[0] == "/delete") {
				CardsAgainstBotUserDatabase.remove({}, function(err) {});
				CardsAgainstBotGamesDataBase.remove({}, function(err) {});
			} else if (message[0] == "/debug") {
				CardsAgainstBotUserDatabase.find({}, function (err, teams){
					console.log(teams)
				});
				CardsAgainstBotGamesDataBase.find({}, function (err, teams){
					console.log(teams)
				});
			}  else if (message[0] == "/party") {
				CardsAgainstBotUserDatabase.find({ TelegramUserID: TelegramUserID }, function (err, teams){
					var GameID = getRandomInt(0,100000000);
					if (teams.length == 1) {
						var UserNickname = teams[0].UserNickname;
						CardsAgainstBotGamesDataBase.find({PartyStatus: "waiting", PlayersIDs: { "$in" : [UserNickname]}}, function (err, teams){
							if (teams.length == 0) {
								var kitty = new CardsAgainstBotGamesDataBase({
									GameID: GameID,
									GameCreator: UserNickname,
									CurrentQuestion: "",
									PartyStatus: "waiting",
									Responses: [],
									PlayersIDs: [UserNickname],
									Players: [{
										TelegramUserID: TelegramUserID,
										UserNickname: UserNickname,
										Wins: 0
									}]
								});
								kitty.save();
								CardsAgainstBotResponse("Nice, share this link with your friends.\n\nhttps://telegram.me/CardsAgainstBot?start=" + GameID + "\n\nWhen everyone are online type /partystart.",TelegramUserID);
							} else {
								CardsAgainstBotResponse("You are in a party. Type /end to leave.",TelegramUserID);
							}
						});
					} else {
						CardsAgainstBotResponse("Setup your username first. Type /connect.",TelegramUserID);
					}
				});
			} else if (message[0] == "/end") {
				CardsAgainstBotUserDatabase.find({ TelegramUserID: TelegramUserID }, function (err, teams){
					var UserNickname = teams[0].UserNickname;
					CardsAgainstBotGamesDataBase.find({$or:[ {PartyStatus:"waiting"}, {PartyStatus:"started"}], PlayersIDs: { $in : [UserNickname]}}, function (err, teams){
						if (teams.length > 0) {
							if(teams[0].GameCreator == UserNickname) {
								CardsAgainstBotGamesDataBase.findOne({ GameID: teams[0].GameID}, function (err, doc){
								   	doc.PartyStatus = "ended",
									doc.save();
								});
								teams[0].Players.forEach(function(user){
									if(user.UserNickname != UserNickname) {
										CardsAgainstBotResponse("Host ended the party.\nHasta la vista.", user.TelegramUserID);
									} else {
										CardsAgainstBotResponse("Party Terminated.",TelegramUserID);
									}
								});
							} else {
								if(teams[0].PlayersIDs.length - 1 > 1) {
									teams[0].Players.forEach(function(user){
										if(user.UserNickname != UserNickname) {
											CardsAgainstBotResponse("@" + UserNickname + " leave.", user.TelegramUserID);
										} else {
											CardsAgainstBotResponse("Now you are free to go :P",TelegramUserID);
										}
									});
								} else {
									CardsAgainstBotGamesDataBase.findOne({ GameID: teams[0].GameID}, function (err, doc){
									   	doc.PartyStatus = "ended",
										doc.save();
									});
									teams[0].Players.forEach(function(user){
										if(user.UserNickname != UserNickname) {
											CardsAgainstBotResponse("@" + UserNickname + " leave, insuficient users.\nParty terminated. Hasta la vista.", user.TelegramUserID);
										} else {
											CardsAgainstBotResponse("Now you are free to go :P",TelegramUserID);
										}
									});
								}
							}
						} else {
							CardsAgainstBotResponse("You aren't in any party.",TelegramUserID);
						}
					});
				});
			} else if (message[0] == "/partystart" || message[0] == "/next") {
				CardsAgainstBotUserDatabase.find({ TelegramUserID: TelegramUserID }, function (err, teams){
					var UserNickname = teams[0].UserNickname;
					CardsAgainstBotGamesDataBase.find({ GameCreator: UserNickname, PartyStatus: "waiting" }, function (err, teams){
						if (teams.length == 1) {
							if(teams[0].Players.length > 1) {
								if (teams[0].PartyStatus == "waiting") {
									var QuestionNumber = getRandomInt(0, 441);
									var CardCzar = getRandomInt(0,teams[0].Players.length - 1);
									CardsAgainstBotGamesDataBase.findOne({ GameID: teams[0].GameID}, function (err, doc){
									   	doc.PartyStatus = "started",
									   	doc.CurrentQuestion = "open"
									   	doc.CardCzar = teams[0].Players[CardCzar].TelegramUserID
										doc.save();
									});
									teams[0].Players.forEach(function(user){
										var A = getRandomInt(0, 2089);
										var B = getRandomInt(0, 2089);
										var C = getRandomInt(0, 2089);
										var D = getRandomInt(0, 2089);

										var markup = {
											keyboard: [
									            [answers[A].text],
									            [answers[B].text],
									            [answers[C].text],
									            [answers[D].text]
									        ],
									        one_time_keyboard: true
										};
										if (message[0] == "/next") {
											CardsAgainstBotResponse("Next Round!", user.TelegramUserID);
											setTimeout(function(){
												CardsAgainstBotResponse("The next Card Czar is @" + teams[0].Players[CardCzar].UserNickname, user.TelegramUserID);
											},500);
										} else {
											CardsAgainstBotResponse("Game will start in 3 seconds. You have 15 seconds to answer.", user.TelegramUserID);
											setTimeout(function(){
												CardsAgainstBotResponse("The first Card Czar is @" + teams[0].Players[CardCzar].UserNickname, user.TelegramUserID);
											},500);
										}
											
										setTimeout(function(){
											if(teams[0].Players[CardCzar].TelegramUserID != user.TelegramUserID) {
												CardsAgainstBotResponse(questions[QuestionNumber].text, user.TelegramUserID, markup);
											} else {
												CardsAgainstBotResponse(questions[QuestionNumber].text, user.TelegramUserID);
											}
										},3000);
										setTimeout(function(){
											CardsAgainstBotGamesDataBase.findOne({ GameID: teams[0].GameID}, function (err, doc){
											   	doc.CurrentQuestion = "czar";
												doc.save();
												if(teams[0].Players[CardCzar].TelegramUserID != user.TelegramUserID) {
													CardsAgainstBotResponse("Time is up. Czar is contemplating the cards.", user.TelegramUserID);
												} else {
													CardsAgainstBotGamesDataBase.find({GameID: teams[0].GameID}, function (err, teams){
														var AnswersReply = {
															keyboard: [],
													        one_time_keyboard: true
														};
														teams[0].Responses.forEach(function(answers){
															var response = [answers.Response];
															AnswersReply.keyboard.push(response);
														});
														CardsAgainstBotResponse("Czar, choose one.", user.TelegramUserID, AnswersReply);
													});
												}	
											});
										},18000);
									});
								} else {
									CardsAgainstBotResponse("Party already began.",TelegramUserID);
								}
							} else {
								CardsAgainstBotResponse("Each party have to have at least 2 users.",TelegramUserID);
							}
						} else {
							CardsAgainstBotResponse("You aren't the party moderator.",TelegramUserID);
						}
					});
				});
			} else if (message[0] == "/start" && message[1] != undefined) {
				CardsAgainstBotUserDatabase.find({ TelegramUserID: TelegramUserID }, function (err, teams){
					if(teams.length == 1) {
						var UserNickname = teams[0].UserNickname;
						CardsAgainstBotGamesDataBase.find({ GameID: message[1] }, function (err, teams){
							if (teams.length == 1) {
								if(teams[0].GameCreator != UserNickname) {
									if(teams[0].PartyStatus == "waiting") {
										CardsAgainstBotGamesDataBase.findOne({ GameID: message[1]}, function (err, doc){
											var NewUser = {
												TelegramUserID: TelegramUserID,
												UserNickname: UserNickname,
												Wins: 0
											}
											doc.PlayersIDs.push(UserNickname);
									   		doc.Players.push(NewUser);
											doc.save();
										});
										CardsAgainstBotResponse("Welcome to @" + teams[0].GameCreator + " party!",TelegramUserID);
										teams[0].Players.forEach(function(user){
											CardsAgainstBotResponse("@" + UserNickname + " join the party!", user.TelegramUserID);
										});
									} else {
										CardsAgainstBotResponse("Party already started.",TelegramUserID);
									}
								} else {
									CardsAgainstBotResponse("You are the game creator, you are already on the game.",TelegramUserID);
								}
							} else {
								CardsAgainstBotResponse("This game doesn't exists.",TelegramUserID);
							}
						});
					} else {
						CardsAgainstBotResponse("You aren't connected yet. Please send /connect to get started. And try again.",TelegramUserID);
					}
				});
			} else {
				CardsAgainstBotUserDatabase.find({ TelegramUserID: TelegramUserID }, function (err, teams){
					var UserNickname = teams[0].UserNickname;
					CardsAgainstBotGamesDataBase.find({PartyStatus:"started", PlayersIDs: { $in : [UserNickname]}}, function (err, teams){
						if (teams[0] != undefined) {
							if(teams[0].CurrentQuestion == "open") {
								CardsAgainstBotGamesDataBase.findOne({ GameID: teams[0].GameID}, function (err, doc){
									var Response = {
										Response: req.body.message.text,
										UserNickname: UserNickname
									}
									doc.Responses.push(Response);
									doc.save();
									teams[0].Players.forEach(function(answer){
										CardsAgainstBotResponse("@" + UserNickname + ": " + req.body.message.text, answer.TelegramUserID);
									});
								});
							} else if(teams[0].CurrentQuestion == "czar") {
								if(teams[0].CardCzar == TelegramUserID) {
									CardsAgainstBotGamesDataBase.findOne({ GameID: teams[0].GameID}, function (err, doc){
										doc.PartyStatus = "waiting",
										doc.Responses = [],
										doc.save();
									});
									var winner;
									var response;
									teams[0].Responses.forEach(function(answer){
										if(answer.Response.indexOf(req.body.message.text) != -1) {
											winner = answer.UserNickname;
										}
									});
									teams[0].Players.forEach(function(answer){
										CardsAgainstBotResponse("The winner is @" + winner + "!", answer.TelegramUserID);
									});
									setTimeout(function(){
										CardsAgainstBotUserDatabase.find({ UserNickname: teams[0].GameCreator }, function (err, teams){
											CardsAgainstBotResponse("Type /next to continue or /end to finish.", teams[0].TelegramUserID);
										});
									},1000);
								} else {
									CardsAgainstBotResponse("Time is up. Czar is contemplating.",TelegramUserID);
								}	
							}
						} 
					});
				});
			}
		} else if (req.body.message.reply_to_message.text != undefined) {
			var TelegramUserID = req.body.message.from.id;
			if (req.body.message.reply_to_message.text == "Nice, reply this message with any username.\nThis username will be shown to other users.") {
				var username = req.body.message.text;
				if (username.indexOf(" ") == -1) {
					console.log("username validated");
					CardsAgainstBotUserDatabase.find({ TelegramUserID: TelegramUserID }, function (err, teams){
						if(teams.length == 1) {
							console.log("already");
							CardsAgainstBotResponse("You are already connected. Type /help to commands.",TelegramUserID);
						} else {
							CardsAgainstBotUserDatabase.find({ UserNickname: username }, function (err, teams){
								console.log("new");
								if(teams.length == 1) {
									CardsAgainstBotResponse("User already chosen. Try again.",TelegramUserID);
								} else {
									var kitty = new CardsAgainstBotUserDatabase({
										TelegramUserID: TelegramUserID,
										UserNickname: username
									});
									kitty.save();
									CardsAgainstBotResponse("Yay, now your CardsAgainstBot username is @" + username + "\n\nType /help for commands.",TelegramUserID);
								}
							});
						}
					});
				} else {
					CardsAgainstBotResponse("Spaces are not allowed. Try again.",TelegramUserID);
				}
			}
		}
		res.send("ok");
	});

	function CardsAgainstBotResponse(text, SendToID, markup) {
		if (markup != undefined) {
			var formData = {
				chat_id: SendToID,
				text: text,
				reply_markup: JSON.stringify(markup)
			};
		} else {
			var formData = {
				chat_id: SendToID,
				text: text
			};
		}
		request.post({url:'https://api.telegram.org/bot[BOT_TOKEN]/sendMessage', formData: formData}, function optionalCallback(err, httpResponse, body) {
	  		if (err) {
	   			return console.error('[GypsyBot] upload failed:', err);
	  		}
		});
	}