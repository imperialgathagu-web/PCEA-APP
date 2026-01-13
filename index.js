const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const handler = require('./handlers/messageHandler');

const client = new Client();

client.on('qr', qr => qrcode.generate(qr, { small: true }));
client.on('ready', () => console.log('⚡ IMPERIAL TECH ONLINE'));

client.on('message', msg => handler(client, msg));

client.initialize();
