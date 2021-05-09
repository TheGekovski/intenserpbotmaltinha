module.exports = async (client) =>{
    const guild = client.guilds.cache.get('826859654260064287'); // id do servidor em que o "membercount"(contagem de membros) vai ficar
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('840936158447403018'); // canal onde o "membercount" vai ficar
        channel.setName(`Total Membros: ${memberCount.toLocaleString()}`);
        console.log('A mudar o numero de membros');
    }, 5000);
}