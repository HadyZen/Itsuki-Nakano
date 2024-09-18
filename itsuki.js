  const express = require('express');
	const app = express();
	const axios = require('axios');
	const login = require("./fb-chat-api-temp");
	const { warna, font, logo } = require("./hady-zen/log.js");
	const fs = require("fs");
	const path = require("path");
	const akun = fs.readFileSync('akun.txt', 'utf8');
	const { awalan } = require('./config.json');
 
console.log(warna.biru + `
█ ▀█▀ █▀ █░█ █▄▀ █ ░█▄░█ ▄▀█ █▄▀ ▄▀█ █▄░█ █▀█
█ ░█░ ▄█ █▄█ █░█ █ ░█░▀█ █▀█ █░█ █▀█ █░▀█ █▄█
							       	  v1.2.0\n`);
console.log(logo.info + "itsuki nakano ai chatbot messenger by hady and saveng.");

	if (!akun || akun.length < 0) {
console.log(logo.error + 'Harap masukkan cookie terlebih dahulu.');
	}

login({appState: JSON.parse(fs.readFileSync('akun.txt', 'utf8'))}, (err, api) => {
		if(err) return console.log(logo.error + `terjadi kesalahan saat login: ${err}`);
console.log(logo.akun + 'itsuki berhasil masuk ke akun.');
console.log(logo.akun + 'mulai menerima pesan dari pengguna.');

		api.listen((err, message) => {
  const text = message.body;

			async function itsuki() {
					 if (text && text.toLowerCase().startsWith(awalan)) {
					try {
  const hadi = text.substring(text.indexOf("itsuki") + "itsuki".length).trim() || "hai";
	const { data } = await axios.get(`https://api-rangestudio.vercel.app/api/Itsuki?query=${hadi}&maxline=5`);
  api.sendMessage(data.answer, message.threadID, message.messageID);
	} catch (err) { 
console.log(logo.error + 'terjadi kesalahan pada api: ' + err);
}
	} else {
console.log(logo.pesan + `ID: ${message.threadID || 'null'} - pesan: ${text || 'tidak ada pesan'}`);
 }
}
itsuki();		
});
app.listen(3000, () => { });
});

app.get('/', (req, res) => { 
 res.sendFile(path.join(__dirname, 'hady-zen', 'hadi.html'));
});

process.on('unhandledRejection', (reason, promise) => {
	console.log(logo.error + 'unhandled promise rejection:', reason);
});

process.on('uncaughtException', (err) => {
	console.log(logo.error + 'uncaught exception:', err);
});