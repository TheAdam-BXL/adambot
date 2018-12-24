const Discord = require('discord.js');
const fs = require("fs");
const botconfig = require("../botconfig.json");
let misc = require("../misc.json");
const client = new Discord.Client({disableEveryone: true});
const i18n = require('i18n');
//const superagent = require("superagent");

var prefix = (botconfig.prefix)


module.exports.run = async (bot, message, args) => {
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    if(message.author.bot) return;
    let blue = botconfig.discordblue

    if (!args[2]) return message.channel.send("Que veux tu me demander ?");
    let answer = ["Nope", "Ouais", "Peut-être ;p", "Jsp", "JAMAIS DE LA LIFE !", "OUAIS my xXxXxX", "NON my xXxXxX"]
    let result = Math.floor((Math.random() * answer.length));

    let question = args.slice().join(" ");

    let BallEmbed = new Discord.RichEmbed()
    .setColor(blue)
    .setTitle("Boule de crystal")
    .addField(`${message.author.username} asked`, `\`${question}\``, true)
    .addField("Ma boule est en train de me dire que...", `\`${answer[result]}\``, true)
    message.channel.send(BallEmbed)
}

module.exports.help = {
    name: "8ball"
}
