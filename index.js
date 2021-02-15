const Discord = require('discord.js');
Discord.Constants.DefaultOptions.ws.properties.$browser = "Discord Android"
const client = new Discord.Client({ disableMentions: 'everyone' });
const ytdl = require("ytdl-core");
client.commands = new Discord.Collection();
const config = require('./config.json')
const snek = require("node-superfetch")
const dotenv = require("dotenv")
const Canvas = require("canvas")

const welcome = require("./welcome");
welcome(client);

client.aliases = new Discord.Collection();
client.snipes = new Map();
const queue = new Map();
const fs = require('fs')
const ms = require('ms')

const http = require('http');
const express = require('express');
const app = express ()

app.listen(process.env.PORT)

app.get("/", (req, res) => {
  res.sendStatus(200);
});

client.on("voiceStateUpdate", async (oldState, newState) => {

    if(oldState.channel == undefined){
    var role = newState.guild.roles.cache.get("797464244618264606")
    if(newState.channel.id !== "791946753770913803") return
      newState.member.roles.add(role)
    }
    if(newState.channel == undefined){
    var role = oldState.guild.roles.cache.get("797464244618264606")
    if(oldState.channel.id !== "791946753770913803") return
      oldState.member.roles.remove(role)
    }
      
    })

client.on('message', async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;


    let prefix = (process.env.prefix);
    let msg = message.content.toLowerCase();
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let command = args.shift().toLowerCase();
    let sender = message.author;
    if ( message.content == `<@${client.user.id}>` || message == `<@!${client.user.id}>`) {
      message.channel.send(`**Prefix Saya : ${prefix}**`)
    }

  if(!message.content.startsWith(prefix)) return undefined;
  message.prefix = prefix;

    if(!msg.startsWith(prefix)) return;//---------------------

    try {
        let commandFile = require(`./cmds/${command}.js`); 
        commandFile.run(client, message, args); 
    } catch(e) { 
        console.log(e.message); 
    } finally { 
        console.log(`${message.author.tag} menggunakan command: ${command} di ${message.guild.name}`);
    }
  
  });


  client.on("ready", async() => {
  
    function randomStatus() {
  let status = [`discord.gg/warkop`] 
  let rstatus = Math.floor(Math.random() * status.length)
  
  client.user.setActivity(status[rstatus], {type: "PLAYING" });
}; setInterval(randomStatus, 5000)

client.user.setStatus('online').then(console.log).catch(console.error);
  console.log(`Logged in as : ${client.user.tag}`);
  console.log(`${client.user.username} is ready!`)
}, 30000)
  

 
client.login(process.env.TOKEN);
 