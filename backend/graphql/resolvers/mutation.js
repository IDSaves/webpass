const axios = require("axios");
const FormData = require("form-data");
const Passports = require("../../models/passports.js");
const fs = require("fs");
const nodemailer = require("nodemailer");
const handlebars = require("handlebars");

const genString = (length) => {
    let result = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for ( let i = 0; i < length; i++ ) result += characters.charAt(Math.floor(Math.random() * characters.length));
    return result;
};

const readHTMLFile = (path, callback) => {
    fs.readFile(path, {encoding: 'utf-8'}, (err, html) => {
        if (err) {
            throw err;
            callback(err);
        }
        else {
            callback(null, html);
        }
    });
};

const postImage = (avatar) => new Promise((resolve, reject) => {
    let data = new FormData();
    data.append("type", "base64");
    data.append("image", avatar);

    axios({
        method: "post",
        url: "https://api.imgur.com/3/image",
        data: data,
        headers: {
            "Authorization": `Client-ID ${process.env.IMGUR_KEY}`,
            ...data.getHeaders()
        },
        maxContentLength: Infinity,
        maxBodyLength: Infinity
    })
    .then((resp) => resolve(resp))
    .catch((err) => {
        console.log(err);
        reject(err)
    });
})

module.exports = {
    createPassport: async (parent, { input }) => {
        const { avatar, type, social, personal, conf_email} = input;
        let avatarUpload = await postImage(avatar);
        let avatarLink = avatarUpload.data.data.link;
        let code = genString(5);
        let key = genString(25);

        let foundSameCodes = await Passports.find({code: code});
        while (foundSameCodes.length > 0) {
            code = genString(5);
            foundSameCodes = await Passports.find({code: code});
        }

        let passport = new Passports({
            code: code,
            key: key,
            avatar: avatarLink,
            type: type,
            personal: personal,
            social: social,
            conf_email: conf_email,
        });

        let newPassport = await passport.save()
        console.log(newPassport);
        let emailTransport = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            tls: {
                rejectUnauthorized:false
            },
            secure: true,
            auth: {
                user: process.env.EMAIL_LOGIN,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        try {
            readHTMLFile('emailTemplates/keyDelivery.html', async (err, html) => {
                var template = handlebars.compile(html);
                var replacements = {
                     key: `${code}:${key}`
                };
                var htmlToSend = template(replacements);
                var mailOptions = {
                    from: process.env.EMAIL_FROM, 
                    to: conf_email,
                    subject: "WebPass - passport key",
                    html : htmlToSend
                 };
                 let info = await emailTransport.sendMail(mailOptions);
                 console.log(info.messageId)
            });
        }
        catch (e) {
            throw new Error(e);
        }

        return newPassport.code;
    },

    managePassport: async (parent, { input }) => {
        const { code, key, avatar, personal, social } = input;
        const passport = await Passports.findOne({code: code, key: key});

        if (avatar && (avatar !== passport.avatar)) {
            let newAvatar = await postImage(avatar);
            passport.avatar = newAvatar.data.data.link;
        }

        for (let [key, value] of Object.entries(personal)) 
            if (passport.personal[key] !== value) passport.personal[key] = value;
        
        for (let [key, value] of Object.entries(social)) 
            if (passport.social[key] !== value) passport.social[key] = value;
        
        await passport.save();

        return passport.code;
    }
}