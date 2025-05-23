import { type CallbackQueryContext } from "grammy";
import { mentionUser } from "../utils";
import bot from "../bot";

export async function handleCallbacks(ctx: CallbackQueryContext<any> ) {
    const data = ctx.callbackQuery.data;
    // console.log(ctx.callbackQuery);
    
    if (data === "press") {
        await ctx.answerCallbackQuery({ text: "مح 💅🏻" });

    } else if (data === "2press") {
        await ctx.answerCallbackQuery({ text: "اهووو هم هذا الحلو 🌸" });

    } else if (data == "userInfo") {
        const mention = ctx.from ? mentionUser(ctx.from) : 'لفيو';
        await bot.api.editMessageText(ctx.from.id, ctx.callbackQuery.message!.message_id,
            `اسمك : ${mention} \n ايدي حسابك : ${ctx.from.id}`, {parse_mode: "HTML"});
        }
    }
