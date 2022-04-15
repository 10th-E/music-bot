const Discord = require('discord.js');
module.exports = {
  name: "help",
  run: async (client, message, args) => {
    var p = client.config.prefix
    const infoEmbed = new Discord.MessageEmbed()
	    .setColor('#57a3bd')
	    .setTitle('Help')
	    .setURL('https://www.youtube.com/watch?v=0iaNqJN5MTM')
      .setDescription(`
        Commands Available :
      `)
     .addFields(
	 	  { name: '━━ 🎶 ・ Music commands ━━', value: `\`${p}play\`, \`${p}stop\`, \`${p}skip\`, \`${p}forceskip\`, \`${p}queue\`, \`${p}nowplaying\`, \`${p}pause\`, \`${p}resume\`, \`${p}prefix\`` },
      { name: '឵឵  ឵឵  ឵឵', value: '឵឵  ឵឵  ឵឵'},
      { name: '━━ 🤖 ・ General commands ━━', value: `\`${p}ping\`, \`${p}help\`` },
	    )
	  .setFooter(`Page requested by ${message.author.username}`, message.author.displayAvatarURL());
  message.reply({ embeds: [infoEmbed] }).catch(console.error)
  }
}