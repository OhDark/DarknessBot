module.exports = {
    name: "",
    usage: "<input>",
    run: (client, message, args) => {
        message.delete();




            message.console.send("E' stata inviata una richiesta di supporto");
            message.console.send(args.join(" "));
    }
}