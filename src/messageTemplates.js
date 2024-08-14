const projectConsts = require('./projectConsts');

function getStartMessage(userName) 
{
    return `Good day, ${userName} 😎\n\nHere you can test the Uniton Connect library, ` +
     `which is a handy solution for working with the TON ecosystem inside web applications made on Unity!`;
}

function getStartMessageButtons() 
{
    return {
        inline_keyboard: [
            [{ text: 'Launch 👛', web_app: { url: projectConsts.UNITY_BUILD_HOST } }],
            [{ text: 'Documentation 📖', url: projectConsts.UNITON_CONNECT_DOC }],
            [{ text: 'Unigram Payment Library 📈', url: projectConsts.UNIGRAM_PAYMENT_REPO }]
        ]
    };
}

module.exports =
{
    getStartMessage,
    getStartMessageButtons
}