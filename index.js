const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();


client.on("ready", () => {
    let activities = [
        `BOT OFICIAL | IntenseRoleplay©️`,
        `BOT OFICIAL | IntenseRoleplay©️`
      ],
      i = 0;
    setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
          type: "PLAYING"
        }), 1000000 * 60); 
    client.user
        .setStatus("online")
        .catch(console.error);
  console.log("Estou Online!")
});

client.on("message", async message => {             // NAO MEXER
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    if (!message.content.startsWith(config.prefix)) return;
    if (message.content.startsWith(`<@${client.user.id}>`) ||
    message.content.startsWith(`<@${client.user.id}>`)) return;


    let args = message.content.split(" ").slice(1);
    let command = message.content.split(" ")[0];
    command = command.slice(config.prefix.length);
    try {
        let commandFile = require(`./commands/${command}.js`);
        delete require.cache[require.resolve(`./commands/${command}.js`)];
        return commandFile.run(client, message, args);
    } catch (err) {
        console.log(err);
    }
})

client.on('guildMemberAdd', (member) => {
     
    const canalId = '826859654570311766' //id do canal de bem-vindos
    const canal = member.guild.channels.cache.get(canalId)
    const embed = new Discord.MessageEmbed()
        .setTitle("Bem-Vindo")
        .setDescription(`Olá <@${member.id}> sê Bem-Vindo!`)
        .setImage("https://cdn.discordapp.com/attachments/840922831133868042/840928080381739008/GIF_-_Intense_RP.gif")
        .setFooter(`Sistema de Bem-Vindo | Geko's Bot`)

    canal.send(embed)
})


client.on('guildMemberRemove', (member) => {
     
    const canalId = '840922831133868042' //id do canal de saidas
    const canal = member.guild.channels.cache.get(canalId)
    const embed = new Discord.MessageEmbed()
        .setTitle("Adeus")
        .setDescription(`Maltinha o/a <@${member.id}> saiu do servidor!`)
        .setImage("https://cdn.discordapp.com/attachments/840922831133868042/840928080381739008/GIF_-_Intense_RP.gif")
        .setFooter(`Sistema de Saidas | Geko's Bot`)

    canal.send(embed)
})


client.login(config.token);