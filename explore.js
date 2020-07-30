const Twilio = require("twilio");

const client = new Twilio("auth sid", "auth token");

client.messages
        .list()
        .then(messages => 
            console.log(`the most recent mesage is ${messages[0].body}`)
            ).catch(err => console.errror(err));

console.log("Gathering your message log")