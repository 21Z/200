import Command from "../../Base/Command.js";
import { MessageAttachment } from "discord.js";
import { Canvas as Canvacord } from "canvacord";

class Blurpify extends Command {

    constructor(client) {
        super(client);

        this.config({
            name: "blurplefy",
            aliases: ["blurpify", "blurple"],
            description: "Blurpify image!"
        });
    }

    async run(message, args) {
        const user = message.mentions.users.first() || this.client.resolveUser(args.join(" ")) || message.author;

        const m = await message.reply("⏱ | Please wait...");
        const img = await Canvacord.colorfy(user.displayAvatarURL({ format: "png", size: 2048 }), "#4d5e94");
        await m.delete().catch(() => { });

        return message.reply(new MessageAttachment(img, "blurple.png"));
    }

}

export default Blurpify;