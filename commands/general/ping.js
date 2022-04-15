module.exports = {
    name: "ping",
    run: async (client, message, args) => {
      message.channel.send(`Pong! Bot ping is ${client.ws.ping}ms`).catch(console.error)
    }
}