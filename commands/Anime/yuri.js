
//#KobsCode Anime Bot MIT License
const { MessageEmbed } = require('discord.js');
const axios = require('axios');
const { prefix,UserAgent } = require('../../ayarlar.json')
//#KobsCode Anime Bot MIT License
module.exports = {
    name: 'yuri',
    aliases: ['yur'],
    description: 'Random **Yuri** Görüntüleri Alın 🔞',
    usage: `${prefix}yuri`,
    cooldown: 3,
        async execute(client, message, args) {
            if(message.channel.nsfw == false) return message.channel.send(new MessageEmbed().setDescription(`Bu Kanalda NSFW Özelliği Açık değil. Lütfen Farklı bir kanalda deneyin`).setColor('#000000')).then(x => x.delete({timeout:5000})).catch(e => { });
else {
            axios.get('https://api.computerfreaker.cf/v1/yuri', { headers: { 'User-Agent': `${UserAgent}`} } )
            .then((res) => {
            const kobscode = new MessageEmbed()
            .setImage(res.data.url)
            .setColor('BLUE')
            .setTimestamp()
            .setFooter('Rastgele Yuri')
//#KobsCode Anime Bot MIT License
            message.channel.send(kobscode)
            })
        }
    }
//#KobsCode Anime Bot MIT License
}