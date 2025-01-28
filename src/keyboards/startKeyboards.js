const projectConsts = require('../utils/projectConsts');

function getStartActions()
{
    return {
        inline_keyboard: [
            [
                {
                    text: 'Launch 👛',
                    web_app:
                    {
                        url: projectConsts.UNITY_BUILD_HOST
                    }
                }
            ],
            [
                {
                    text: 'Documentation 📖',
                    url: projectConsts.UNITON_CONNECT_DOC
                }
            ],
            [
                {
                    text: 'Unigram Payment Library 📈',
                    url: projectConsts.UNIGRAM_PAYMENT_REPO
                }
            ],
            [
                {
                    text: 'Unigram Payment Template 🤖',
                    url: projectConsts.UNIGRAM_PAYMENT_DEMO
                }
            ]
        ],
    };
}

module.exports =
{
    getStartActions,
};