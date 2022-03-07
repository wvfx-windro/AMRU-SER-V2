const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.ibb.co/Y2mXdR5/ajuser.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `𝙰𝙱𝚄 𝚂𝙴𝚁 𝙱𝙾𝚃

*bot making video* : 

*owner id instagram* :

*github* : 

■□■□■□■□■□■□■□■□■□■□
       _𝑨𝑩𝑼 𝑺𝑬𝑹 𝑩𝑶𝑻_
  ▣▣ 𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 𝙰𝙱𝚄 𝚂𝙴𝚁 ▣▣

`}) 

}));
