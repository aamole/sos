import process from 'node:process'

const BOT_TOKEN = process.env.BOT_TOKEN!

if (!BOT_TOKEN) {
    throw new Error(' BOT_TOKEN not set!')
}

export { BOT_TOKEN }
