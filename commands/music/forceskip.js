const { Permissions } = require('discord.js');
module.exports = {
    name: "forceskip",
    aliases: ["fs"],
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`There is nothing in the queue right now!`).catch(console.error)
        try {
          if(message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)){
          if(queue.songs.length > 1){
            client.distube.skip(message)
            message.channel.send(`Skipped!`).catch(console.error)
            return;
          };
          if(queue.songs.length >= 1){
            client.distube.stop(message)
            message.channel.send('Skipped!').catch(console.error)
            return;
          };
          } else {
            message.channel.send('You are not powerful enough to do that').catch(console.error)
            return;
          }
        } catch (e) {
            message.channel.send(`${e}`).catch(console.error)
        }
    }
}