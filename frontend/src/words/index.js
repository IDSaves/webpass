import EngWords from "./english.json";
import RuWords from "./russian.json";


export default (lang) => {
    if (lang === "ru") return RuWords;
    return EngWords;
}