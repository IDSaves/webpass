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
        let avatarUpload = await postImage(input.avatar);
        let avatarLink = avatarUpload.data.data.link;
        let code = genString(5);
        let key = genString(25);
        let passport = new Passports({
            code: code,
            key: key,

            avatar: avatarLink,

            personal: {
                nickname: input.nickname,
                name: input.name,
                surname: input.surname,
                status: input.status,
                email: input.email,
                bdate: input.bdate,
                country: input.country
            },

            social: {
                twitter: input.twitter,
                facebook: input.facebook,
                vk: input.vk,
                instagram: input.instagram,
                youtube: input.youtube,
                reddit: input.reddit,
                github: input.github,
                steam: input.steam,
                telegram: input.telegram,
                discord: input.discord,
                snapchat: input.snapchat,
                soundcloud: input.soundcloud,
                mixer: input.mixer,
                twitch: input.twitch
            },

            conf_email: input.conf_email,
        });

        await passport.save()

        return `${code}:${key}`;
    }
}