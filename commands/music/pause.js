module.exports = {
    name: "pause",
    aliases: ["hold"],
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`Nothing playing...........e`).catch(console.error)
        if(queue.paused) return message.reply('Its already paused...').catch(console.error)
        queue.pause()
        message.channel.send("Queue Paused").catch(console.error)
    }
}