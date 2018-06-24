"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//var twit = require('twit');
const twit = require("twit");
const chalk_1 = require("chalk");
const app_keys_1 = require("./app.keys");
var bot = new twit(app_keys_1.config.twitterKeys);
console.log(chalk_1.default.bgCyan.bold('Starting Up...'));
var remainingtime = 300;
setInterval(() => {
    remainingtime = remainingtime - 1;
    console.log('remaining time to retweets is ' + remainingtime);
}, 1000);
setInterval(() => {
    remainingtime = 300;
    var quer = app_keys_1.config.twitterConfig.queryString[Math.floor(Math.random() * app_keys_1.config.twitterConfig.queryString.length)];
    bot.get('search/tweets', {
        q: quer,
        count: app_keys_1.config.twitterConfig.searchCount,
        result_type: 'recent',
        lang: app_keys_1.config.twitterConfig.language
    }, (err, data, response) => {
        if (err) {
            console.log(chalk_1.default.magenta.bold("SSSHHHHH!!I'll tell you a secret, We found an " + err));
        }
        else {
            for (var tweet of data.statuses) {
                bot.post('statuses/retweet/:id', { id: tweet.id_str }, (err, data) => {
                    if (err) {
                        console.log(chalk_1.default.magenta.bold("SSSHHHHH!!I'll tell you a secret, We found an " +
                            err));
                    }
                    else {
                        chalk_1.default.bgCyan('Successfully retweeted');
                    }
                });
            }
        }
    });
}, app_keys_1.config.twitterConfig.retweet);
//# sourceMappingURL=bot.js.map