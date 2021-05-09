const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return msg.reply('Não tens permissões para usar este comando!');

    const embed = new Discord.MessageEmbed()
    .setTitle(`Sistema de Ticket`)
    .setDescription('**Para abrires ticket escreve:** \n```!ticket <assunto>```')
    .setThumbnail(`https://cdn.discordapp.com/attachments/840922831133868042/840928080381739008/GIF_-_Intense_RP.gif`)
    .setFooter(`Sistema de ticket | Geko's Bot ${message.guild.name}`)
    message.channel.send(embed)
};

// ESTE COMANDO SERVER PARA O BOT MANDAR UMA MENSAGEM EMBED A DIZER COMO ABRE TICKET //
// !ticketset // comando