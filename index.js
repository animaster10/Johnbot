/**
 * A ping pong bot, whenever you send "ping", it replies "pong".
 */

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

var homechannel = null;

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */

client.on('ready', () => {
  console.log('I am ready!');
  var looper = setInterval(loop, 30000);
  function loop(){
    var date = new Date()
    console.log(date.getMinutes());
    if (homechannel != null && homechannel != 0 && date.getMinutes() == 00){
      homechannel.send("<:JOHN:683392522323623957>");
    }
  }
});


client.on('message', message => {
  if (message.author.id == "479320057713786930" && message.content.includes("John")){
    homechannel = message.channel;
  }
});



// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('NjkxMTIzNDg4NTk3MjEzMjI0.XnbZmA.zUtLyfYNrqsXAisTnnNV6zV3L6E');
