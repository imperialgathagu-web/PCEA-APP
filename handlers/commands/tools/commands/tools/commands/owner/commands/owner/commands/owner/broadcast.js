const config = require('../../config');

module.exports = {
    name: 'broadcast',
    execute: async (client, message, args) => {
        if (!config.owners.includes(message.from)) {
            return message.reply('❌ Owner only');
        }

        const text = args.join(' ');
        if (!text) return message.reply('Usage: .broadcast message');

        const chats = await client.getChats();
        for (let chat of chats) {
            if (chat.isGroup) continue;
            await chat.sendMessage(text);
        }
        message.reply('✅ Broadcast sent');
    }
};
