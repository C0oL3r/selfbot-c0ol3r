const Discord = require('discord.js');
const request = require('request');

exports.run = (client, msg, args) => {
	msg.delete();
	request('https://api.uptimerobot.com/getMonitors?apiKey=u521977-0499e7f37766d8e20b6f751b&format=json', { json: true }, (err, res, body) => {
		var json = body.slice(19); var json2 = json.substring(0, 576 - 1);
		//console.log(json2);
		var obj = JSON.parse(json2);
		var onof1;
		var onof2;
		var onofmes = ['UP', 'DOWN'];
		var onofmess1;
		var onofmess2;
		
		if(obj.monitors.monitor[0].status == 2) {
			onof2 = 1;
			if(onof2 == 1) {
				onofmess2 = onofmes[0];
			};
		}
		if(obj.monitors.monitor[0].status == 9) {
			onof2 = 2;
			if(onof2 == 2) {
				onofmess2 = onofmes[1];
			};
		}
		
		if(obj.monitors.monitor[1].status == 2) {
			onof1 = 1;
			if(onof1 == 1) {
				onofmess1 = onofmes[0];
			};
		}
		if(obj.monitors.monitor[1].status == 9) {
			onof1 = 2;
			if(onof1 == 2) {
				onofmess1 = onofmes[1];
			};
		}
		var embed = new Discord.RichEmbed()
		.setTitle("**__FPlayT Servers Status__**")
		.addBlankField(true)
		.addField(`FPlayT Server 1 Status:`, `**${onofmess1}**`)
		.addBlankField(true)
		.addField(`FPlayT Server 2 Status:`, `**${onofmess2}**`)
		.setThumbnail('https://i.imgur.com/xqNepTH.gif')
		.setTimestamp()
		.setColor('0x18f200')
		.setFooter('By C0oL3r', client.user.avatarURL);
		msg.channel.send(embed).then(msg => { msg.delete(5000) });
	});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'servere',
  description: 'Starea serverelor FplayT',
  usage: 'servere'
};
