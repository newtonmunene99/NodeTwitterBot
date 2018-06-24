//var twit = require('twit');
import * as twit from 'twit';
import chalk from 'chalk';
import { config } from './app.keys';
var bot = new twit(config.twitterKeys);

console.log(chalk.bgCyan.bold('Starting Up...'));

setInterval(() => {
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
            console.log(quer);
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
