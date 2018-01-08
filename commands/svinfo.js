const Discord = require('discord.js');
const request = require('request');

exports.run = (client, msg, args) => {
	msg.delete();
	request('https://servers-live.fivem.net/api/servers/', { json: true }, (err, res, body) => {
		var data = body.slice(440100); var data2 = data.substring(0, 2823047 - 2818317);
		var obj = JSON.parse(data2);
		console.log(obj)
	});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'svinfo',
  description: 'Informatii despre serverele FPlayT',
  usage: 'servere [arg]'
};