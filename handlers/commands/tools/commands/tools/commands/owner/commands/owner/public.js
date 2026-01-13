const config = require('../../config');

module.exports = {
    name: 'public',
    execute: async (client, message) => {
        if (!config.owners.includes(message.from)) {
            return message.reply('❌ Owner only');
        }
        config.mode = 'public';
        message.reply('🌍 Public mode activated');
    }
};
