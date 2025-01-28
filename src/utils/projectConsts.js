const BOT_USERNAME = 'UnitonConnect_bot';
const UNITY_BUILD_HOST = 'https://mrveit.github.io/Veittech-UnitonConnect/';

const UNITON_CONNECT_DOC = 'https://github.com/MrVeit/Veittech-UnitonConnect/blob/main/README.MD';
const UNIGRAM_PAYMENT_REPO = 'https://github.com/MrVeit/Veittech-UnigramPayment';
const UNIGRAM_PAYMENT_DEMO = 'https://t.me/UnigramPayment_bot/launch';

function getBotUrl()
{
    return `https://t.me/${encodeURIComponent(BOT_USERNAME)}`;
}

module.exports =
{
    BOT_USERNAME,
    UNITY_BUILD_HOST,

    UNITON_CONNECT_DOC,
    UNIGRAM_PAYMENT_REPO,
    UNIGRAM_PAYMENT_DEMO,

    getBotUrl
};