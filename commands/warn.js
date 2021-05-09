var Discord = require('discord.js');

exports.run = async(client, msg, args) => {
    if(!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply('Não podes usar!');


    var user = msg.mentions.users.first();
    if(!user) return msg.reply('Não mencionas-te ninguém!');

    var member;

    try {
        member = await msg.guild.members.fetch(user);
    } catch(err) {
        member = null;
    }

    if(!member) return msg.reply('Não está presente no servidor!');

    var reason = args.splice(1).join(' ');
    if(!reason) return msg.reply('Terás de dizer o motivo!');

    var channel = msg.guild.channels.cache.find(c => c.id === '840931352428937226'); //id do canal aonde vai ser postada a mensagem

    var log = new Discord.MessageEmbed()
    .setTitle('Membro Avisado')
    .addField('Membro:', user, true)
    .addField('Staff:', msg.author, true)
    .addField('Razão:', reason)
    channel.send(log);

    var embed = new Discord.MessageEmbed()
    .setTitle('Foste avisado!')
    .setDescription(reason);

    try {
        user.send(embed);
    } catch(err) {
        console.warn(err);
    }

    msg.channel.send(`**${user}** avisou **${msg.author}**!`);

}