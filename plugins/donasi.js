//Jangan Di Hapus Tapi kalo Di tambah Boleh

let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(thumbfoto)).buffer(), `
*Allo mypren bantu donasi yuk supaya bot aktif selalu👋*
╔═══════════════════
║ _*DONASI UNTUK*_ BOTYNYAKAMU
╠═══════════════════
║╭──❉ 〔 *𝗗𝗢𝗡𝗔𝗦𝗜* 〕 ❉──────
║│➸ *DANA* : 085828764046
║│➸ *PULSA*: 085828764046
║│➸ *GOPAY*: _*GAK ADA GOPAY GW MAH*_
║╰──────────────────
╰═════©️botynyakamu
`.trim(), watermark, 'MENU BOT', '.menu', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
