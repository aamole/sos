export async function yourMessage(ctx: any) {
    const text = ctx.msg.text;
    // console.log(text)
    if (text) {
        await ctx.reply(`<b> رسالتك:</b> \n ${text}`, {parse_mode: "HTML"});
    } else {
        await ctx.reply("مافهمت !");        
    }
}
