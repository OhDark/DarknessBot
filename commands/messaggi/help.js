module.exports = {
    name: "help",
    usage: "<input>",
    run: (client, message, args) => {
        message.delete();




            message.channel.send("Al momento non ci sono comandi registrati!");
            message.channel.send(args.join(" "));
    }
}