const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "Enter your session ID",
  OWNER_NUM: process.env.OWNER_NUM || "9470xxxxxxx",
  PREFIX: process.env.PREFIX || ".",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://drive.google.com/file/d/11IWXN7FjbpwxYBBQyR2F9AOoz6REtxgh/view?usp=drivesdk",
  ALIVE_MSG: process.env.ALIVE_MSG || "Hello , I am alive now!!\n\n🥷Made by DAKA XMD👑",
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
  MODE: process.env.MODE || "public",
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || "AIzaSyAGGp4aNSDduYAv_GRNvzH2bUNatdhtcG4",
};
