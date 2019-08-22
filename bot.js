const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs")
var prefix = "#";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : Badstation `);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Badstation ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setActivity('QuickBot.', { type: 'WATCHING' })
});










client.login(process.env.BOT_TOKEN);
