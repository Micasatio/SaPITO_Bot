let media = './galerΓ­a/grupos-oficiales.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*π·πΎπ»π° ππππ°ππΈπΎ ππ», ππ΄ πΈπ½ππΈππΎ π° ππ½πΈπππ΄ π° π»πΎπ πΆπππΏπΎπ πΎπ΅πΈπ²πΈπ°π»π΄π π³π΄ Sapito Bot πΏπ°ππ° π²πΎπ½ππΈππΈπ π²πΎπ½ π»π° π²πΎπΌππ½πΈπ³π°π³ :D*

*β€ πΆπππππ πππππππππ πππ π±ππ:*
*1.-* https://chat.whatsapp.com/CntRn9MHu6oI29HWU6tVrC

*2._* https://chat.whatsapp.com/GxxpMawzPaW6MR0p2vH432

*3._* https://chat.whatsapp.com/I1vjFTvfZQbJI4aw0Vj5dk

*4._* https://chat.whatsapp.com/Lu01IGq2bd73PvofLwFmv5

*5._* https://chat.whatsapp.com/J21ki55h5lSLKpcWxacXCa

Si quieres aΓ±adir tu grupo aquΓ­ escribe al privado de mi creador 


`.trim(), wm, media, [['π πΌπ΄π½π πΏππΈπ½π²πΈπΏπ°π» π', '#menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
