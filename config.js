require('dotenv').config()
module.exports = {
    app: {
        prefix: '!',
        token: process.env.TOKEN,
        playing: 'Making this server 200% better!',
        maxVolume: 100,
        loopMessage: true,
        discordPlayer: {},
        language: 'pt',
        DJ: {
            enabled: false,
            roleName: 'DJ Grafite',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume', 'play']
        }
    },
};