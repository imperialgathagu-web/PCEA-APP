module.exports = {
    name: 'kick',
    execute: async (client, message) => {
        if (!message.isGroup) return message.reply('Group only');

        const chat = await message.getChat();
        const sender = message.author;

        const admins = chat.participants
            .filter(p => p.isAdmin)
            .map(p => p.id._serialized);

        if (!admins.includes(sender)) {
            return message.reply('❌ Admin only');
        }

        const mentioned = message.mentionedIds[0];
        if (!mentioned) return message.reply('Tag a user');

        await chat.removeParticipants([mentioned]);
    }
};
