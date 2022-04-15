const { DiscordTogether } = require('discord-together');
const Discord = require('discord.js');
module.exports = {
  name: "youtube",
  aliases: ["yt"],
  run: async (client, message, args) => {
    const discordTogether = new DiscordTogether(client)
    if(!message.member.voice.channel){
      message.reply('Join a VC First').catch(console.error)
      return;
    }
    if(message.member.voice.channel) {
      discordTogether.createTogetherCode(message.member.voice.channel.id, 'youtube').then(async invite => {
        const youtubeEmbed = new Discord.MessageEmbed()
          .setTitle(`Click To Start`)
          .setDescription('Note: It Doesnt Work On Phone')
          .setURL(`${invite.code}`)
          .setFooter('YouTube', 'https://logos-world.net/wp-content/uploads/2020/04/YouTube-Emblem.png')
          .setColor('#fc0320')
      return message.channel.send({ embeds: [youtubeEmbed] }).catch(console.error);
         });
    };
  }
}