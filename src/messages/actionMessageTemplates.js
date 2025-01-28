function getStartMessage(userName) 
{
    return `Good day, ${userName} 😎\n\nHere you can test `+
        `the <b>Uniton Connect library</b>, which is a handy solution for `+
        `working <b>with the TON ecosystem</b> inside web applications made on Unity!`;
}

module.exports =
{
    getStartMessage,
}