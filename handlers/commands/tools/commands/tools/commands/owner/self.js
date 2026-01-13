const config = require('../../config');

module.exports = {
    name: 'self',
    execute: async (client, message) => {
        if (!config.owners.includes(message.from)) {
            return message.reply('❌ Owner only');
        }
        config.mode = 'self';
        message.reply('🔒 Self mode activated');
    }
};
