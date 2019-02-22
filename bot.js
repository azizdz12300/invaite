const rWlc = {}
client.on('message', message => { 
var prefix = "*";//البرفكس  
if(message.channel.type === "dm") return;
if(message.author.bot) return;
   if(!rWlc[message.guild.id]) rWlc[message.guild.id] = { 
    role: "U.T,!"
  }
const channel = rWlc[message.guild.id].role
  if (message.content.startsWith(prefix + "autorole")) { 
    if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
    let newrole = message.content.split(' ').slice(1).join(" ") 
    if(!newrole) return message.reply(`**${prefix}autorole Role Name**`) 
    rWlc[message.guild.id].role = newrole
    message.channel.send(`**${message.guild.name}'s Role Has been changed to ${newrole}**`); 
  }


client.on("guildMemberAdd", member => {
      if(!rWlc[member.guild.id]) rWlc[member.guild.id] = {
    role: "member"
  }
  const Role = rWlc[member.guild.id].role
    const sRole = rWlc[member.guild.id].role
    let Rrole = member.guild.roles.find('name', sRole); 
  member.addRole(Rrole); 
 
      
client.login(process.env.BOT_TOKEN);      
      }); 
}); 
