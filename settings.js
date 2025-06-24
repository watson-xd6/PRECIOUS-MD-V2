const fs = require('fs');
const chalk = require('chalk');

global.botName = 'PRECIOUS-MD'; // Nama Bot Kamu
global.ownerNumber = '263781330745'; // Nomor Kamu
global.ownerName = 'Watsonfourpence'; // Nama Kamu
global.website = 'https://whatsapp.com/channel/0029Vb2bsRhLCoWthwxUC82B'; // Web Kamu
global.wagc = 'https://chat.whatsapp.com/EvasRhIcb9L5TtKcjlFoQo'; // Web Kamu

global.packname = botName; // Nama Pack
global.author = ownerName; // Nama Author
global.footer = '© 𝐖𝐀𝐓𝐒𝐎𝐍-𝐗𝐃';
global.creator = '263781330745@s.whatsapp.net'; // Nomor Creator
global.premium = ['263781330745']; // User Premium
global.prefa = '.'; // Prefix
global.tempatDB = 'database.json'; // Tempat Database

global.saluran = '120363390631892606@newsletter'; // ID Saluran Kamu
global.saluranName = 'watsonfourpence'; // Nama Saluran Kamu
global.sessionName = 'session'; // Nama Folder Sesi Bot Kamu

global.panel = 'https://control.optikservers.com'; // Link Panel Kamu
global.cred = 'ptla_aPkBJgJLb5Af29zPTI6FwicgPV8Bw9kuuiTLxp6WEq5'; // API PTLA Kamu
global.apiuser = 'ptlc_XZ8jqmbIbeNLmY8GS3DLdgBmErMlj4Cb36OWno0SAuT'; // API PTLC Kamu
global.eggs = '15'; // Eggs Number (Recommended)
global.nets = '5'; // Nets Number (Recommended)
global.location = '1'; // Location Number (Recommended)

global.CF_API_KEY = "KGGRRGbLDNT7N-jDi7JUW4hHregvHQvm8o4ORYZ_"; // Apikey CF Kamu
global.CF_ZONE_ID = "b9883610d0c1ecf9c83f002897822971"; // Zone ID CF Kamu
global.CF_DOMAIN = "optikservers.com"; // Nama Domain Kamu di CF

global.typemenu = 'v5'; // Gaya Menu v1-v5
global.typereply = 'v4'; // Gaya Reply v1-v4
global.autoblocknumber = '62'; // Auto Block Number
global.antiforeignnumber = '62'; // Anti Foreign Number
global.welcome = true // Auto Welcome Msg
global.anticall = false // Anti Call
global.autoswview = true // Auto View Status
global.adminevent = true // Admin Event Msg
global.groupevent = true  // Group Event Msg
global.notifRegister = true // Notif Register
global.onlyRegister = true // Hanya Pendaftar
global.autoJoinNewsletter = true // 

global.payment = {
	dana: "088213993436",
	gopay: "088213993436",
	ovo: "088213993436",
	qris: "isi qr kalian",
	shopeePay: "088213993436",
	seabank: "088213993436"
};

global.limit = {
	free: 20, // Limit User Non-premium
	premium: 1000, // Limit User Premium
	vip: "VIP" // Limit User VIP 👑
};

global.uang = {
	free: 1000, // Uang User Non-premium
	premium: 1000000, // Uang User Premium
	vip: 1000000 // Uang User VIP 👑
};

global.bot = {
	limit: 0, // Limit Awal Bot
	uang: 0 // Uang Awal Bot
};

global.game = {
	suit: {}, // Sesi Game Suit
	menfes: {}, // Sesi Menfess
	tictactoe: {}, // Sesi Tictactoe
	kuismath: {}, // Sesi Kuis Mathematics
	tebakbom: {}, // Sesi Tebak Bom
};

global.mess = {
	admin: "This feature is only for group admins, dude! 👮",  
botAdmin: "I need to be an admin first to run this! 😭",
	done: "Here you go, im Precious-Md 🇿🇼",
	error: "Oops, something went wrong... please try again!",
	group: "Oops, this feature can only be used in groups~ 🫡",
	limit: "Aww, your usage limit is up... 😢\n\ntry typing .owner to purchase and increase your limit, or upgrade to premium to get more limits and access to special features! ✨",
	nsfw: "The NSFW feature has been disabled in this group, try asking the admin for permission first~ 🫣",
	owner: "Only the owner can access this feature! 👑",  
    premium: "This feature is for premium users only! 🌟",  
    private: "This feature can only be used in private chat! 💌",
    wait: "Hold on a moment... I'm processing it ▰▰▰▱▱▱▱▱ ⏳🤗"
};

global.imageDonasi = "https://files.catbox.moe/2899fa.jpg"; // Url Image Donasi (dana, qris etc..)
global.imageUrl = "https://files.catbox.moe/2899fa.jpg"; // Url Image
global.imageBuffer = fs.readFileSync("./media/imageBuffer.png"); // Buffer Image
global.videoBuffer = fs.readFileSync("./media/videoBuffer.mp4"); // Buffer Video
global.audioBuffer = fs.readFileSync("./media/audioBuffer.mp3"); // Buffer Audio

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})