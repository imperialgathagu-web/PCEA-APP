const fs = require('fs');
const path = require('path');
const config = require('../config');

module.exports = async (client, message) => {
    if (!message.body.startsWith(config.prefix)) return;

    if (config.mode === 'self' &&
        !config.owners.includes(message.author || message.from)) return;

    const args = message.body
        .slice(config.prefix.length)
        .trim()
        .split(/ +/);

    const cmd = args.shift().toLowerCase();

    const commandsPath = path.join(__dirname, '../commands');
    const files = fs.readdirSync(commandsPath, { recursive: true });

    for (const file of files) {
        if (!file.endsWith('.js')) continue;
        const command = require(`../commands/${file}`);
        if (command.name === cmd) {
            return command.execute(client, message, args);
        }
    }
};
