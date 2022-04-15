module.exports = {
  name: "ready",
  async execute(client){
    client.user.setActivity("Music | t!", {
      type: "PLAYING",
    }),
	  console.log('------Commands Loaded------ \n\nReady! \n' + `Logged in as ${client.user.username}`);
  },
}