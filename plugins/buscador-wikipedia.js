import axios from "axios"
import fetch from "node-fetch"
import cheerio from "cheerio"
async function wikipedia(querry) {
try {
const link = await axios.get(`https://es.wikipedia.org/wiki/${querry}`)
const $ = cheerio.load(link.data)
let judul = $('#firstHeading').text().trim()
let thumb = $('#mw-content-text').find('div.mw-parser-output > div:nth-child(1) > table > tbody > tr:nth-child(2) > td > a > img').attr('src') || `//i.ibb.co/nzqPBpC/http-error-404-not-found.png`
let isi = []
$('#mw-content-text > div.mw-parser-output').each(function (rayy, Ra) {
let penjelasan = $(Ra).find('p').text().trim() 
isi.push(penjelasan)})
for (let i of isi) {
const data = {
status: link.status,
result: {
judul: judul,
thumb: 'https:' + thumb,
isi: i}}
return data}
} catch (err) {
var notFond = {
status: link.status,
Pesan: eror}
return notFond}}
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[βοΈππππβοΈ] π΄πππ°π πππ°π½π³πΎ πΌπ°π» π΄π» π²πΎπΌπ°π½π³πΎ!!*\n*πππΎ π²πΎπππ΄π²ππΎ:*\n*${usedPrefix + command} πΏππππππ πππππ π ππππππ*\n\n*π΄πΉπ΄πΌπΏπ»πΎ:*\n*${usedPrefix + command} Estrellas*`
wikipedia(`${text}`).then(res => {
m.reply(`*π°qui estΓ‘ la informaciΓ³n encontrada:*\n\n` + res.result.isi)
}).catch(() => { m.reply('*[βοΈππππβοΈ] No encontrΓ© nada de eso, πΏπππ΄π±π° πππ΄ π·π°ππ°π π΄ππ²ππΈππΎ ππ½π° ππΎπ»π° πΏπ°π»π°π±ππ° π π»πΎ π·π°ππ°π π΄ππ²ππΈππΎ π²πΎπππ΄π²ππ°πΌπ΄π½ππ΄*') })}
handler.help = ['wikipedia'].map(v => v + ' <apa>')
handler.tags = [ 'internet']
handler.command = /^(wiki|wikipedia)$/i
export default handler
