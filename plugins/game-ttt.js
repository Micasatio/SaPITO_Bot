import TicTacToe from '../lib/tictactoe.js'
let handler = async (m, { conn, usedPrefix, command, text }) => {
conn.game = conn.game ? conn.game : {}
if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw '*[â] đ°đđŊ đ´đđđ°đ đ´đŊ đđŊ đšđđ´đļđž đ˛đžđŊ đ°đģđļđđ¸đ´đŊ*'
if (!text) throw `*[â] đđ´ đđ´đđđ¸đ´đđ´ đŋđžđŊđ´đ đđŊ đŊđžđŧđąđđ´ đ° đģđ° đđ°đģđ° đŗđ´ đšđđ´đļđž*\n\n*ââ đ´đšđ´đŧđŋđģđž*\n*â ${usedPrefix + command} sapito*`
let room = Object.values(conn.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
await m.reply('*[đšī¸] đ¸đŊđ¸đ˛đ¸đ° đ´đģ đšđđ´đļđž, đđŊ đšđđļđ°đŗđžđ đđ´ đđŊđ¸đž đ° đģđ° đŋđ°đđđ¸đŗđ°*')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: 'â',
O: 'â­',
1: '1ī¸âŖ',
2: '2ī¸âŖ',
3: '3ī¸âŖ',
4: '4ī¸âŖ',
5: '5ī¸âŖ',
6: '6ī¸âŖ',
7: '7ī¸âŖ',
8: '8ī¸âŖ',
9: '9ī¸âŖ',
}[v]})
let str = `
đŽ TRES EN RAYA đŽ

â = @${room.game.playerX.split('@')[0]}
â­ = @${room.game.playerO.split('@')[0]}

        ${arr.slice(0, 3).join('')}
        ${arr.slice(3, 6).join('')}
        ${arr.slice(6).join('')}

đđđđŊđž đŗđ´ @${room.game.currentTurn.split('@')[0]}
`.trim()
if (room.x !== room.o) await conn.sendMessage(room.x, { text: str, mentions: this.parseMention(str)}, { quoted: m })
await conn.sendMessage(room.o, { text: str, mentions: conn.parseMention(str)}, { quoted: m })
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING' }
if (text) room.name = text     
let imgplay = `https://cope-cdnmed.agilecontent.com/resources/jpg/8/9/1590140413198.jpg`
conn.sendButton(m.chat, `*đš đđđđ đđ đđđđ đŽ*\n\n*â đ´đđŋđ´đđ°đŊđŗđž đ°đģ đđ´đļđđŊđŗđž đšđđļđ°đŗđžđ*\n*â đŋđ°đđ° đąđžđđđ°đ đž đđ°đģđ¸đđđ´ đŗđ´ đģđ° đŋđ°đđđ¸đŗđ° đđđ´đŊ đ´đģ đ˛đžđŧđ°đŊđŗđž ${usedPrefix}delttt*`, wm, imgplay, [['đđŊđ¸đđđ´ đ° đģđ° đŋđ°đđđ¸đŗđ°', `${usedPrefix + command} ${text}`]], m, { mentions: conn.parseMention(text) })
conn.game[room.id] = room
}}
handler.command = /^(tictactoe|ttc|ttt|xo)$/i
export default handler
