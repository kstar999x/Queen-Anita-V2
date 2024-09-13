//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib01SWitQTnVGNGRYS2M3MjB4U3RmUjBtWisyTHY5aE1Wd0NNZFNCV09XRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU2praVRUcXBiaXY2UUc5dnYxaGo1TEZ1c01weWJSL2VWMEpsMlZQVi93MD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJQ0s4OE41d2NLUm44emx0Y2xhRFFaOXVjR216OHlvQlNQUFVuN1UzY0VjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoaDlTVUdRelV5WmtNWkdtWXRuQjBITmtVdGRDWWFHZVRycnNjbHNnaWhVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhNTkNsczBNZEJwTW01WHlKaUVSRjRxSTU2ZFRHaEJIOW1qbjZlbytsVnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9FOU1oaHYwMFY5R2x4QVRrTDJLYVRlTXlSQ0JheForQ3JJYVVIWis4Mjg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0s2WFJRQjUybUxlSXhseEtFbFdMdm9xR1BMZWVVMkNLVWRpampCSXRubz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUmVJdGpCaEZnZ05ibi9xUjZ3Z2ZrbytwcXRNdXVwRjBtTEVXVjFCMDBtaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdtTWJUVXBJamhMb0w2REV4TC9HamFhTi9vK2pvUjZEUlhxeTVESHVSQzlHazNMQkJ4RnVKc0xIMWdYUG5KRmdQMDRGRmVrK0RqOXh2TVRNUWNnd2h3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIyLCJhZHZTZWNyZXRLZXkiOiJhbE1jeUZjYVJVcWVkakpTbUxNa1IycWo3emwyUkkwSFprN2JUVFdTZXdZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ2RGZ1c2JPY1NQYW5laENVcFpudTR3IiwicGhvbmVJZCI6IjIzMWFjNzIzLTdjNjQtNDA4NC1hYmVjLTVhNmQwZTQwODEzYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtd1VPeFBHbDdsbENhTWhWQ2UxTDZJUUQrd289In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibm1jZmJWd2poSktWQXB4OWY2ZW9HUVpkZ2tvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNZTkZNQkxGIiwibWUiOnsiaWQiOiIyMzQ5MTY3NDc2NDQ3OjMyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IktzdGFyIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJM1Zwcm9GRU56SWtiY0dHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJUbFVJR2xRUkFPeXBvOHo1QldBNXpETnU3bVdKUkJZYm02Wlo2WTlndlRJPSIsImFjY291bnRTaWduYXR1cmUiOiJJUDYyUFhCQU5MSjloakZMK21VU0FKR1RiLzI5R1Ftd1BhTlRPRTc0VFlSWDhRY3p1eVMvY2RIdkcwc1BMclcxVnlaUlhaTkJyWi9EaTJVM0ltaDVBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoieCtxTkxOeTJxQXJUSHR1UUVtSEs1aW9ocnk1ZnFVZDlCd2JUTnZhSDRKUGxwcVp4b0tLMWtnWUxQdGYrdzZsZ3Y0eFE1eWpmbFl3WEVZTkN5S1FMZ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTY3NDc2NDQ3OjMyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlU1VkNCcFVFUURzcWFQTStRVmdPY3d6YnU1bGlVUVdHNXVtV2VtUFlMMHkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjYyNDM5NDYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUHp5In0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "KSTAR_BOT-⭐",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
