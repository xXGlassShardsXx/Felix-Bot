const inf = require("./config.json");
const tokens = require("./tokens.json")
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
 //end of modules

bot.on("ready", async () => {
  console.log(inf.testlog + ` ${bot.user.username} is online!`)
  bot.user.setActivity("with yarn");
})

bot.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = inf.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

if(cmd === `${prefix}hello`){
  return message.channel.send("Hi, there!");
}

if(cmd === `${prefix}botinfo`){

let bicon = bot.user.displayAvatarURL;
let botembed = new Discord.RichEmbed()
.setDescription("I am a simple bot made for fun. I can do some commands and soon I will be able have a whole library of them.")
.setColor("#15f153")
.addField("Bot Name", bot.user.username)
.addField("Creator Name", "xXGlassShardsXx#1914")
.addField("Created on", bot.user.createdAt)
.setThumbnail(bicon);


  return message.channel.send(botembed);
}


})

bot.login(tokens.tokennamehere);

