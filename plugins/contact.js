const Abu = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
Abu.addCommand({ pattern: 'owner ?(.*)', fromMe: false, desc: 'owner number' }, (async (message, match) => {


const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:ABU SER [OWNER]\n' // full name
            + 'ORG:ᴀʙᴜ sᴇʀ;\n' // 
            + 'TEL;type=CELL;type=VOICE;waid=917025994178:+91 7025994178\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "' + Config.OA + ' [OWNER]", vcard: vcard}, MessageType.contact)
}))
