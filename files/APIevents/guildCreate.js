const Discord = require("discord.js");


module.exports = (client, guild, message) => {
    let CreateD = guild.createdAt.toString().split(' ');
    let month = {
        "1": "Janvier",
        "2": "Février",
        "3": "Mars",
        "4": "Avril",
        "5": "Mai",
        "6": "Juin",
        "7": "Juillet",
        "8": "Août",
        "9": "Septembre",
        "10": "Octobre",
        "11": "Novembre",
        "12": "Décembre"
      }

    const guildCreateEmbed = new Discord.RichEmbed()
    .setColor('#5AED49')
    .setThumbnail(guild.iconURL)
    .setAuthor("Nouveau serveur !")
    .setDescription(`Je suis maintenant connecté à __${client.guilds.size}__ serveurs ! Merci ^^`)
    .addField("Nom :", guild.name, true)
    .addField("ID :", guild.id, true)
    .addField("Créateur :", guild.owner.user.tag, true)
    .addField("Créé le :", `${CreateD[2]} ${month[guild.createdAt.getMonth()]} ${CreateD[3]} at ${CreateD[4]}`, true)
    .addField("Membres : ", guild.memberCount, true)
    .setTimestamp(new Date())
}
