import EngWords from "./english.json";
import RuWords from "./russian.json";


export default () => {
    if (localStorage.getItem("lang") === "Ru") return RuWords;
    return EngWords;
}