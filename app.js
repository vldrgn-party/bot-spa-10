const TelegramBot = require('node-telegram-bot-api');

const token = '7367571767:AAHUZaMsFQwKvf3s096--6gKggxMClFPJDg';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    async function startBot() {
        const menu_game = {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "▶️ Қазір ойнаңыз",
                            web_app: {url: "https://create-course.site/bfPyzXrs"},
                        },
                    ],
                    [
                        {
                            text: "🌐 Web - нұсқасы",
                            url: "https://create-course.site/bfPyzXrs",
                        },
                    ],
                    [
                        {
                            text: "🐉 Ресми арна",
                            url: "https://t.me/dragonmoney",
                        },
                    ],
                    [
                        {
                            text: "💰 Бонустар",
                            url: "https://t.me/dragonmoney",
                        },
                    ],
                ],
            },
            parse_mode: 'HTML'
        }

        if (text === '/start') {
            await bot.sendPhoto(chatId, './img/home.jpg');
            await bot.sendMessage(chatId, "💰 Dragon money қош келдіңіз! 🐉 \n\nЕнді тікелей telegram-да ойнай аласыз!", menu_game)
        }
    }
    startBot()
})