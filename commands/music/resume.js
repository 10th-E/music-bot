module.exports = {
    name: "resume",
    aliases: ["unpause"],
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`You never played anything in the first place`).catch(console.error)
        if(!queue.paused) return message.channel.send('Its.... not paused').catch(console.error)
        queue.resume()
        message.channel.send("Resumed").catch(console.error)
    }
}