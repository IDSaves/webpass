import countries from "./countries.json";

export default (toFind) => {
    if (!toFind) {
        return countries;
    }
    else {
        return countries.find((a) => {
            if (a.code == toFind) {
                return true;
            }
        })
    }
}