const messageUtils = require('./messageUtils');
const timeUtility = require('./timeUtils');

const express = require('express');
const path = require('path');

const TelegramBot = require('node-telegram-bot-api');

require('dotenv').config();

const server = express();
const port = process.env.PORT || 5000;

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

server.use(express.static(path.join(__dirname, 'TelegramBot-UnitonConnect')));
server.use(express.json());

function init(message, match) 
{
    const userData = messageUtils.generateUserData(message);

    messageUtils.sendStartMessage(bot, userData);
}

bot.onText(/\/start(?:\s+(.+))?/i, (message, match) => 
{
    init(message, match);
});

bot.on('polling_error', (error) => 
{
    console.log(`[${timeUtility.timestamp}] Failed to contact with bot, polling error:`, error.code, error.message);
});

server.listen(port, () => 
{
    console.log(`[${timeUtility.timestamp}] Bot running at port: ${port}`);
});