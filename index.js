const Discord = require('discord.js');
const client = new Discord.Client();
const token = "OTE4MjA3NjU3NzIxMDY5NjI4.YbD5hQ.s8j1qS1dra6GW-i6mbFmrxnUZIQ"

client.once('ready', () => {
   console.log("Félicitations, votre bot Discord a été correctement initialisé !");
});

client.login(process.env.TOKEN);
