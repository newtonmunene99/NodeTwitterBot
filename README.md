# NodeTwitterBot

A twitter bot for retweets using nodejs

## To Run Locally

**Ensure you have the latest stable version of nodejs installed.**

1.  Git clone this repo
2.  cd into repo
3.  Run `npm install` to install dependencies
4.  Register a new app on twitter developers
5.  In src folder create a new file `app.keys.ts` and paste the code below.
    Fill in the required fields with credetials obtained in step 4.

```js
export const config = {
    twitterKeys: {
        consumer_key: 'key here',
        consumer_secret: 'secret here',
        access_token: 'access token here',
        access_token_secret: 'access token secret here'
    },
    twitterConfig: {
        queryString: [
            '#gainwithxtiandela',
            '#gain',
            '#gainwith',
            'Ionic Framework',
            '#100daysofcode'
        ], // add your own queries above
        language: 'en',
        username: 'your twitter username here',
        retweet: 0.1 * 1000 * 60, //this is the retweet interval in milliseconds. default is every six seconds
        searchCount: 20 // how many retweets at every interval
    }
};
```

6.  Run `npm run start` to start bot.
7.  Run `npm run dev` to start bot with live reload

## To run on a remote server

I suggest you try hosting on Heroku or any other that you prefer. Please refer to their respective docs.

**Currently Supported**

-   [x] Retweets

I only implemented retweets because thats what I needed. Feel free to open a pull request or an issue and I will implement.
