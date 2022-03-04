const contacts = [
  ['6285828764046', ' owner-ZIFABOTZ'],
  ['6282122977451', ' BOT ME'],
]
function handler(m) {
  m.reply('Ada perlu apa kak cari owner?, Mau donasi,sewa bot? Kalau enggak Jangan spam WhatsApp owner')
  for (let [nomor, nama] of contacts) this.sendContact(m.chat, nomor + '@s.whatsapp.net', nama || conn.getName(nomor + '@s.whatsapp.net'), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
