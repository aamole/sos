import { Bot } from "grammy";
import { BOT_TOKEN } from "./env";
import { startCommand } from "./commands/start";
import { handleCallbacks } from "./handlers/callback";
import { yourMessage } from "./handlers/message";


const bot = new Bot(BOT_TOKEN);


bot.command("start", startCommand);

bot.on("callback_query:data", handleCallbacks);

bot.on("message:text", yourMessage);


bot.start();
console.log("🌟 Bun!");

export default bot;