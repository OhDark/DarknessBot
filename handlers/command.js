const { readdirSync } = require ("fs");

const ascii = require("ascii-table");

let table = new ascii("Commands");
table.setHeading("Comandi", "Stato");

module.exports = (client) => {
    readdirSync("./commands/").forEach(dir => {
        const commands = readdirSync('./commands/${dir}/0' ).filter(filr => File.endsWith(".js"));

        for (let file of commands) {
            let pull = require('../commands/${dir}/${file}');

            if (pull.name) {
                client.commands.set(pull.name, pull);
                table.addRow(file, 'Caricato');
            } else {
                table.addRow(file, 'Errore  -> missing a help.name, or help.name is not a string0');
                continue;
            }

            if(pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
        }
    });

    console.log(table.toString());
}