function run(tkn, pfx){
const Discord = require("discord.js");
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_VOICE_STATES', 'GUILD_MESSAGES', 'DIRECT_MESSAGES', 'GUILD_BANS', 'GUILD_EMOJIS_AND_STICKERS', 'GUILD_MEMBERS', 'GUILD_MESSAGE_REACTIONS', 'GUILD_INTEGRATIONS', 'GUILD_PRESENCES', 'GUILD_SCHEDULED_EVENTS', 'DIRECT_MESSAGE_TYPING', 'GUILD_INVITES'], allowedMentions: { parse: ['users'], repliedUser: true}, ws: { properties: { $browser: "Discord iOS" }} });
const fs = require("fs");
const DisTube = require("distube");
const { SpotifyPlugin } = require("@distube/spotify");
client.distube = new DisTube.DisTube(client, { searchSongs: 0, emitNewSongOnly: true, leaveOnFinish: true, plugins: [new SpotifyPlugin()], youtubeCookie: process.env.YOUTUBE_COOKIE });
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.prefix = pfx;

fs.readdir('./commands/music/', (err, files) => {
  if (err) return console.log('Could not find any music commands!')
  const jsFiles = files.filter(f => f.split('.').pop() === 'js')
  console.log("------Loading music commands.------")
  if (jsFiles.length <= 0) return console.log('Could not find any music commands!')
  jsFiles.forEach(file => {
    const cmd = require(`./commands/music/${file}`)
    console.log(`Loaded ${file}`)
    client.commands.set(cmd.name, cmd)
    if (cmd.aliases) cmd.aliases.forEach(alias => client.aliases.set(alias, cmd.name))
  })
});

fs.readdir('./commands/general/', (err, files) => {
  if (err) return console.log('Could not find any general commands!')
  const jsFiles = files.filter(f => f.split('.').pop() === 'js')
  console.log("------Loading general commands.------")
  if (jsFiles.length <= 0) return console.log('Could not find any general commands!')
  jsFiles.forEach(file => {
    const cmd = require(`./commands/general/${file}`)
    console.log(`Loaded ${file}`)
    client.commands.set(cmd.name, cmd)
    if (cmd.aliases) cmd.aliases.forEach(alias => client.aliases.set(alias, cmd.name))
  })
});

const events = fs.readdirSync('./events/discordjs').filter(file => file.endsWith('.js'));

for (const file of events) {
  const events = require(`./events/discordjs/${file}`);
  if (events.once) {
    client.once(events.name, (...args) => events.execute(...args));
  } else {
    client.on(events.name, (...args) => events.execute(...args));
  }
}

const distubeEvents = fs.readdirSync('./events/distube').filter(file => file.endsWith('.js'));

for (const file of distubeEvents) {
  const distubeEvents = require(`./events/distube/${file}`);
  client.distube.on(distubeEvents.name, (...args) => distubeEvents.execute(...args));
}

client.login(tkn)
}

run(process.env.TOKEN_3, "t!")

/*
const express = require("express")()
express.all('/', function(req, res) {
  res.send("E")
})
express.listen(process.env.PORT, console.log("Started"))
*/
// For funny token=MTAyMjE4Njk0OTMzNjkwNzc4Ng.GnX1s4.XFAk86mFtEnXgwV16oY6W1zfNfZMOoIPf-K628
