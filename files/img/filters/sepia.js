const Discord = require('discord.js');
const fs = require("fs");
let botconfig = require("../botconfig.json");
let misc = require("../misc.json");
const client = new Discord.Client({disableEveryone: true});
const lang = require('i18n')
const arcadia = require('arcadia-module');
const snekfetch = require('snekfetch');
//const superagent = require("superagent");

var prefix = (botconfig.prefix)


module.exports.run = async (bot, message, args) => {
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;
    if(message.author.bot) return;

    message.channel.send("INFO >> Loading...").then (async msg => {
      await msg.react('⏱')
        let member = message.mentions.members.first() || message.member;
        await message.channel.send({
          files: [{
            attachment: `https://www.arcadia-api.xyz/api/v1/sepia?url=${member.user.displayAvatarURL}`,
            name: `${member.user.username}-sepia.png`
          }]
      
        })
        await msg.delete()
    })

}

module.exports.help = {
    name: "sepia"
}