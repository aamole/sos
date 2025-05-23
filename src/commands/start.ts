import { Context, InlineKeyboard } from "grammy";
import { mentionUser } from "../utils";

export async function startCommand(ctx: Context) {
    const keyboard = new InlineKeyboard()
        .text("دوس هنا 😥💗", "press")
        .text("هنا هم 🌸", "2press")
        .row()
        .text("معلوماتك", "userInfo");
    const mention = ctx.from ? mentionUser(ctx.from) : 'لفيو';

    await ctx.reply(`هيلاووو 🌷 <b>${mention}</b>`, {
        reply_markup: keyboard,
        parse_mode: "HTML"
    });
}
