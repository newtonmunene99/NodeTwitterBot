//var twit = require('twit');
import * as twit from 'twit';
import chalk from 'chalk';
import * as http from 'http';
import { config } from './app.keys';
var bot = new twit(config.twitterKeys);

console.log(chalk.bgCyan.bold('Starting Up...'));
var remainingtime = 300;

setInterval(() => {
    remainingtime = remainingtime - 1;
    console.log('remaining time to retweets is ' + remainingtime);
}, 1000);

setInterval(() => {
    remainingtime = 300;
    var quer =
        config.twitterConfig.queryString[
            Math.floor(Math.random() * config.twitterConfig.queryString.length)
        ];
    bot.get(
        'search/tweets',
        {
            q: quer,
            count: config.twitterConfig.searchCount,
            result_type: 'recent',
            lang: config.twitterConfig.language
        },
        (err, data: any, response) => {
            if (err) {
                console.log(
                    chalk.magenta.bold(
                        "SSSHHHHH!!I'll tell you a secret, We found an " + err
                    )
                );
            } else {
                for (var tweet of data.statuses) {
                    bot.post(
                        'statuses/retweet/:id',
                        { id: tweet.id_str },
                        (err, data) => {
                            if (err) {
                                console.log(
                                    chalk.magenta.bold(
                                        "SSSHHHHH!!I'll tell you a secret, We found an " +
                                            err
                                    )
                                );
                            } else {
                                chalk.bgCyan('Successfully retweeted');
                            }
                        }
                    );
                }
            }
        }
    );
}, config.twitterConfig.retweet);

http.createServer((req, res) => {
    res.end(
        'THIS IS JUST A FRONT FOR SOME OTHER SHADDY BUSINESS IN THE BACKEND!!'
    );
}).listen(process.env.PORT || 8080);
