const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});


client.on('ready', async() => {
var server = "511569524353531904"; //
var channel = "511569524353531906";//
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**Dalida Spam , Dalida Spam , Dalida Spam , Dalida Spam , Dalida Spam , Dalida Spam , Dalida Spam ,  , Dalida Spam , Dalida Spam , Dalida Spam , Dalida Spam , Dalida Spam , Dalida Spam , Dalida Spam , **')
    },400);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join(NDg2MTc5NzU5MDkzNTc5Nzc5.Ds8BUQ.Yaz8lKVOtFLIdYnE_tj_swi2oMk))
   message.delete()
  }
 });

 NDg2MTc5NzU5MDkzNTc5Nzc5.Ds8BUQ.Yaz8lKVOtFLIdYnE_tj_swi2oMk);
