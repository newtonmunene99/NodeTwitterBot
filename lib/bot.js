"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//var twit = require('twit');
const twit = require("twit");
const chalk_1 = require("chalk");
const config_1 = require("./config");
var bot = new twit(config_1.config.twitterKeys);
console.log(chalk_1.default.bgCyan.bold('Starting Up...'));
setInterval(() => {
    var quer = config_1.config.twitterConfig.queryString[Math.floor(Math.random() * config_1.config.twitterConfig.queryString.length)];
    bot.get('search/tweets', {
        q: quer,
        count: config_1.config.twitterConfig.searchCount,
        result_type: 'recent',
        lang: config_1.config.twitterConfig.language
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
}, config_1.config.twitterConfig.retweet);
//# sourceMappingURL=bot.js.map