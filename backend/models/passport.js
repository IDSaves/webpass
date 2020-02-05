import mongoose, { Schema } from "mongoose";

const { ObjectId } = Schema.Types;

const PassportsSchema = new Schema({
    code: String,
    key: String,

    avatar: String,

    personal: {
        nickname: String,
        name: String,
        surname: String,
        status: String,
        email: String,
        bdate: Date,
        country: String
    },

    social: {
        twitter: String,
        facebook: String,
        vk: String,
        instagram: String,
        youtube: String,
        reddit: String,
        github: String,
        steam: String,
        telegram: String,
        discord: String,
        snapchat: String,
        soundcloud: String,
        mixer: String,
        twitch: String
    },

    conf_email: String,

    creation_date: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("Passports", PassportsSchema);