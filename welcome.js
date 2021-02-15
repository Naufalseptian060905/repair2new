const config = require("./config");
const Canvas = require("canvas");
const Discord = require("discord.js");

module.exports = function (client) {

  client.on("guildMemberAdd", member => {
    const welcomeChannel = member.guild.channels.cache.find(ch => ch.id === config.welcome)
    welcomeChannel.send(`**HALLO CUSTOMER BARU** <@${member.id}>`)
  
    // message.channel.send('')
})
  
    const description = {
        name: "WelcomeImages",
        filename: "welcome.js",
        version: "4.8"
    }
    //log that the module is loaded
    console.log(` :: ⬜️ Module: ${description.name} | Loaded version ${description.version} from ("${description.filename}")`)
    //fires every time when someone joins the server
    client.on("guildMemberAdd", async member => {
      const canvas = Canvas.createCanvas(800, 400);
      const ctx = canvas.getContext('2d');
    
      // Since the image takes time to load, you should await it
      const background = await Canvas.loadImage('./warkop.png');
      // This uses the canvas dimensions to stretch the image onto the entire canvas
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      // Use helpful Attachment class structure to process the file for you
      const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'warkop.png');
      
      const welcomeembed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTimestamp()
      .setDescription(`<a:kanan:800686480766795786> **WELCOME TO WARKOP** <@${member.id}> <a:kiri:800686494662656031>


<a:panah:800600463732506624> **Langsung aja verify di**
<a:kanan:800686480766795786> <#791946752768737281> <a:kiri:800686494662656031>
<a:panah:800600463732506624> **Baca rules WARKOP di**
<a:kanan:800686480766795786> <#778068162801041418> <a:kiri:800686494662656031>
<a:panah:800600463732506624> **Ambil rolenya di**
<a:kanan:800686480766795786> <#804396301641973810> <a:kiri:800686494662656031>
<a:panah:800600463732506624> **Dan jangan lupa perkenalkan diri kalian di**
<a:kanan:800686480766795786> <#804408220222357574> <a:kiri:800686494662656031>


:coffee: **"STAY ENJOY WITH WARKOP"** :coffee:`)
      .setImage("attachment://warkop.png")
      .setFooter("Welcome", client.user.displayAvatarURL())
      .attachFiles(attachment);
    //define the welcome channel
    const channel = member.guild.channels.cache.find(ch => ch.id === config.welcome);
    //send the welcome embed to there
    channel.send(welcomeembed);
    })
  
}
 