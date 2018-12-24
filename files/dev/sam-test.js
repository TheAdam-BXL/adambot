const Discord = require('discord.js');
const i18n = require('i18n');

module.exports.run = async (bot, message, args) => {
  if (message.author.id !== "373846355191267328") return message.reply(i18n.t('ERREUR >> Veuillez contacter AdamBXL pour éxecuter cette commande.'))
  if(message.author.bot) return;
  message.delete()
// CMD
}


module.exports.help = {
    name: "sam-test"
}
