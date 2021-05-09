const Discord = require("discord.js");

exports.run = async (client, message, args) => {
message.delete();
const justificacao = args.join(" ");

if (!args[0]) {
  return message.channel.send(`${message.author.username}, escreva o assunto do ticket`)
} else if (justificacao.length > 250) {
  return message.channel.send(`${message.author.username}, tens de dar uma justificação. A tua mensagem nao pode ter mais de 250 caracteres!`);
} else {
    message.guild.channels.create(`Ticket ${message.author.username}`, {
        type: "text",
        parent: "834429586078171136", //id da categoria em que vai ser criado o canal
        topic: `Ticket de  ${message.author.tag}`,
        permissionOverwrites: [
            { id:   message.author.id, allow: ["SEND_MESSAGES", "VIEW_CHANNEL"], },
            { id:   message.guild.roles.everyone, deny: ["VIEW_CHANNEL"], },
        ]
    })
    .then(ch => {
        ch.send(`${message.author}`)
        const embed = new Discord.MessageEmbed()
        .setTitle(`Ticket de ${message.author.username}`)
        .setDescription(`Ticket aberto porque: ${justificacao}`)
        .addField(`Obrigado por teres aberto ticket, agora espera que a staff leia o teu ticket e responda. \nPara fechar ticket faz __!close__ (só a staff consegue fechar o ticket)`)
        .setFooter(`Sistema de ticket | ${message.guild.name}`)
        .setTimestamp()
        .setThumbnail('https://cdn.discordapp.com/attachments/840922831133868042/840928080381739008/GIF_-_Intense_RP.gif')
        ch.send(embed)
        
    })
  

}
}