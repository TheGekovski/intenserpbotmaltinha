const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission('ADMINISTRATOR')) return msg.reply('Não tens permissões para usar este comando!');
  
  const sayMessage = args.join(' ');
  message.delete().catch(O_o => {});

    message.channel.send(`@everyone`)

    const embed = new Discord.MessageEmbed()
        .setColor('#0084ff')
        .setTitle(`Anúncio ${message.guild.name}`)
        .setDescription(sayMessage)
        .setThumbnail(`https://cdn.discordapp.com/attachments/840922831133868042/840928080381739008/GIF_-_Intense_RP.gif`)
        .setFooter(`Sistema de anuncios | Geko's Bot ${message.guild.name}`)

        message.channel.send(embed)
};