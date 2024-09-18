const font = {
  bold: `\x1b[1m`,
  italic: `\x1b[3m`
}
const warna = {
  reset: `\x1b[0m`, 
  hitam: `\x1b[30m`,
  merah: `\x1b[31m`,
  hijau: `\x1b[32m`,
  kuning: `\x1b[33m`,
  biru: `\x1b[34m`,
  magenta: `\x1b[35m`,
  cyan: `\x1b[36m`,
  putih: `\x1b[37m`
};

const logo = {
  error: `${warna.merah}${font.bold}ERROR: ${warna.merah}`, 
  login: `${warna.hijau}${font.bold}LOGIN: ${warna.biru}`, 
  info: `${warna.cyan}${font.bold}INFO: ${warna.biru}`, 
  akun: `${warna.magenta}${font.bold}AKUN: ${warna.biru}`, 
  pesan: `${warna.kuning}${font.bold}PESAN: ${warna.biru}`
}

module.exports = { warna, font, logo };