const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_39_11_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgODEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDksXG4gICAgICAgIDIxLFxuICAgICAgICAyLFxuICAgICAgICAxODUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDU4LFxuICAgICAgICA2OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTc4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk5LFxuICAgICAgICA3NixcbiAgICAgICAgMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkxLFxuICAgICAgICA4MixcbiAgICAgICAgMTQxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDQsXG4gICAgICAgIDczLFxuICAgICAgICAxNTMsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjksXG4gICAgICAgIDM0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDg5LFxuICAgICAgICAyNyxcbiAgICAgICAgODEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzksXG4gICAgICAgIDI0NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgODYsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDk2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDg2LFxuICAgICAgICAxODIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODUsXG4gICAgICAgIDk0LFxuICAgICAgICA4MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDExMixcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDU3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjM0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQzLFxuICAgICAgICA1MixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDc2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNCxcbiAgICAgICAgNixcbiAgICAgICAgMTc4LFxuICAgICAgICAxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY1LFxuICAgICAgICA3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjExLFxuICAgICAgICAxODgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU5LFxuICAgICAgICA5MixcbiAgICAgICAgMTIwLFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDg0LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDM5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNixcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjE1LFxuICAgICAgICA1NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDg4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTIzLFxuICAgICAgICA5MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDg0LFxuICAgICAgICA4NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlVVdUw4aEV5blRkMWdWODJEOTRsYnZmQ1dvdE5iWGVXdUdjcmlmNm1TYnM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInpEYjZmSWVoVE9XNktsUUcxdzBYNFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWY3ZTE0ODgtY2Q0ZC00NzVkLTg5NWEtMDYyOGJlZDY2Y2IxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMSxcbiAgICAgIDI2LFxuICAgICAgODcsXG4gICAgICA3OSxcbiAgICAgIDEwOCxcbiAgICAgIDI0LFxuICAgICAgMzksXG4gICAgICA5NyxcbiAgICAgIDEzOCxcbiAgICAgIDI1MyxcbiAgICAgIDE5NixcbiAgICAgIDkxLFxuICAgICAgMjQ2LFxuICAgICAgMTY5LFxuICAgICAgMTEsXG4gICAgICAxMTUsXG4gICAgICAxNjcsXG4gICAgICAyMjMsXG4gICAgICAyMTQsXG4gICAgICA3OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzcsXG4gICAgICAxNTYsXG4gICAgICAyMzAsXG4gICAgICAyMTIsXG4gICAgICAxMzUsXG4gICAgICA1MixcbiAgICAgIDIyMyxcbiAgICAgIDgzLFxuICAgICAgMTgwLFxuICAgICAgMjA5LFxuICAgICAgMTcwLFxuICAgICAgODMsXG4gICAgICA2NixcbiAgICAgIDE5MixcbiAgICAgIDEyMyxcbiAgICAgIDI5LFxuICAgICAgMTk1LFxuICAgICAgNjMsXG4gICAgICAxNjksXG4gICAgICAxMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaWjJYRDlCWlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE3OTA4NDI5OTQ1OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQW5rYW4+Pj5cIixcbiAgICBcImxpZFwiOiBcIjEyODg3OTQ1Mjc5OTE2ODoxOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOV1E1TkFHRVBUbXRMa0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkFOaXJMbDBFdlBrbFVzWElIakFCZ0NseXlZVjRXK0NaSkVaTDFCdUM5d2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiY3VOc2dxOXkwZkpUZUI4MUYvQ09peE8yZzJvKzhiNlF3bWJ4OHZ6SzBsQ3RqVk81TkFHeVVBUG4zb0YvUm5KV0JHZTlhSGsrazI5cXlaanhKNUZ6QkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVzllOEswb1c3RWFtV3pqSUhxWllBbTNhQndmeG1CM3BDZ1RiRXJkM0xnQzFSaWtGOE5BOGdJTzF6ZjdQZUZqblFxSXlqaS9CZnBVUTVpQzNnak1UQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE3OTA4NDI5OTQ1OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTAxNTU0NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFRV1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQVFXLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYm41OUhFY3Q0d1N0Qk52L3BXNFJnckRZR2o2alVKZFdhczVISitqTG9rQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzgwMDI1NDI4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMxMDE1Mzc0MDUwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
