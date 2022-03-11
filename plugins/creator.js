const { MessageType } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
    contacts: [{
    "displayName": "ᴏᴡɴᴇʀ",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Arybotz;Owner;;;\nFN:Owner Ary Botz\nitem1.TEL;waid=60147751029:60147751029\nitem1.X-ABLabel:📍 Owner\nitem2.EMAIL;type=INTERNET:noeldaniel400@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://hardianto.xyz/\nitem3.X-ABLabel:📮 Rest Api\nitem4.ADR:;;🇲🇾 Malaysia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Region | Malaysia 🇲🇾\nitem5.X-ABLabel:───────[ ARYBOT ]───────\nEND:VCARD"
  }, {
    "displayName": "ᴏᴡɴᴇʀ",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Run;Jasa;;;\nFN:Creator\nitem1.TEL;waid=6285828764046:6285828764046\nitem1.X-ABLabel:📍 Creator\nitem2.EMAIL;type=INTERNET:anidaanida59@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://hardianto.xyz/\nitem3.X-ABLabel:📮 Rest Api\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Region | Kalimantan Barat 🇮🇩\nitem5.X-ABLabel:───────[ JASARUN ]───────\nEND:VCARD"
  }]
  }, MessageType.contactsArray, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner)$/i

module.exports = handler
