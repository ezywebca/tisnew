import { Command, CommandContext, Permission } from './command';

export default class HelpCommand implements Command {
    name = 'help';
    precondition: Permission = 'KICK_MEMBERS';
    
    execute = async (ctx: CommandContext) => {
        return ctx.channel.send(
            '🔨 `plz accept <bot> <reason>` -> accept bot user with reason\n' +
            '🅰 `plz add-badge <bot> <badge_name>` -> add a badge to a bot(FEATURED)\n' +
            '🅰 `plz clear-badges <bot>` -> clear badges from a bot\n' +
            '🅰 `plz delete <bot> <reason>` -> delete a bot from the list\n' +
            '🔨 `plz decline <bot> <reason>` -> decline bot user with reason\n' +
            '🔨 `plz help` -> show this\n' +
            '✅ `plz ping` -> `Authorizers ping` -> pong!\n' +
            '🔨 `plz q` -> show approval queue');
    }
}
