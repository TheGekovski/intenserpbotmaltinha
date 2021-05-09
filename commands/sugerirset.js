const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return msg.reply('Não tens permissões para usar este comando!');

    const embed = new Discord.MessageEmbed()
    .setTitle(`Sistema de Sugestões`)
    .setDescription('**Para criares uma sugestão escreve** \n```!sugerir <sugestão>```')
    .setThumbnail(`https://cdn.discordapp.com/attachments/840922831133868042/840928080381739008/GIF_-_Intense_RP.gif`)
    .setFooter(`Sistema de Sugestões | Geko's Bot ${message.guild.name}`)
    message.channel.send(embed)
};

// ESTE COMANDO SERVER PARA O BOT MANDAR UMA MENSAGEM EMBED A DIZER COMO SE MANDA SUGERIR //
// !sugerirset // comando