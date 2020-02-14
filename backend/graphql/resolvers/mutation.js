import axios from "axios";
import FormData from "form-data";
import Passports from "../../models/passports.js";

const genString = (length) => {
    let result = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for ( let i = 0; i < length; i++ ) result += characters.charAt(Math.floor(Math.random() * characters.length));
    return result;
}

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
        }
    })
    .then((resp) => resolve(resp))
    .catch((err) => reject(err));
})

export default {
    createPassport: async (parent, { input }) => {
        const { avatar, social, personal, conf_email} = input;
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
            personal: personal,
            social: social,
            conf_email: conf_email,
        });

        await passport.save()

        return code;
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