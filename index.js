const Discord = require('discord.js');
const client = new Discord.Client();
const TOKEN = "ODQzMjI4OTQ4MTQxMzA5OTgy.YKA0Jw.EFxYLuLFzUWUxBDGYa7ueTRn0qU"

client.once('ready', () => {
	console.log('Ready!');
});

client.login(TOKEN);