const logger = require('./utils/logger');
const startAttachController = require('./controllers/startAttachController');

const express = require('express');
const path = require('path');
const TelegramBot = require('node-telegram-bot-api');

require('dotenv').config();

const server = express();
const port = process.env.PORT;
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

server.use(express.static(path.join(__dirname, 'TelegramBot-UnitonConnect')));
server.use(express.json());

server.listen(port, () => 
{
    logger.message(`Uniton Connect Bot Template started at port: ${port}`);
});

bot.onText('/start', (message) => 
{
    startAttachController.sendStartMessage(bot, message);
});

bot.on('polling_error', (error) => 
{
     logger.error(`Failed to attach with bot, reason: ${error.message}`);
});