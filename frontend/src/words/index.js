import EngWords from "./english.json";
import RuWords from "./russian.json";


export default (check) => {
    if (!check) {
        if (!localStorage.getItem("lang")) {
            let lang = navigator.language || navigator.userLanguage;
            if (lang === "ru-RU") return RuWords;
            else return EngWords;
        }
        if (localStorage.getItem("lang") === "Ru") return RuWords;
        return EngWords;
    }
    else {
        if (!localStorage.getItem("lang")) {
            let lang = navigator.language || navigator.userLanguage;
            if (lang === "ru-RU") return "Ru";
            else return "Eng";
        }
        if (localStorage.getItem("lang") === "Ru") return "Ru";
        return "Eng";
    }
}