const Discord = require ('discord.js');
const bot = new Discord.Client();

bot.login ("ODY2MzYxMjMwODIxMjk0MTAx.YPRbxQ.TDnkt8yEdBZ28Slr4Ie619dqLVY");

bot.once('ready', () => {
    console.log('Il bot è stato avviato correttamente')
    bot.user.setActivity('?help', { type: 'WATCHING'});
});
    

    

    bot.on('message', (message) => {
      if (message.content == '?time') {
        var data = new Date ();
        var ora = data.getHours(); 
        var minuto = data.getMinutes();
        var giorno = data.getDate();
        var mese = data.getMonth();
    
        message.channel.send("ORA ATTUALE :alarm_clock: :" + ora + ":" + minuto + "," + giorno + "," + mese)
    }
    });

    bot.on('message', (message) => {
        if (message.content == '?help') {
            message.channel.send("Al momento non ci sono comandi registrati!")
    }
    });
