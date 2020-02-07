import Passports from "../../models/passports.js";

export default {
    passports: async () => {
        let every = await Passports.find({});
        return every.map((passport) => {
            passport.key = "hidden";
            passport.conf_email = "hidden";
            return passport;
        });
    },

    passport: async (parent, { code }) => {
        let passport = await Passports.findOne({code: code});
        if (passport) {
            passport.key = "hidden";
            passport.conf_email = "hidden";
            return passport;
        }
        return null;
    },

    isKeyValid: async (parent, { code, key }) => {
        let check = await Passports.findOne({code: code, key: key});
        return Boolean(check);
    }
}