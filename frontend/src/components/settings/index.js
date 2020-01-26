import React, { useState } from "react";
import { Twemoji } from "react-emoji-render";
import "./index.scss";

const Settings = () => {
    const [lang, setLang] = useState(localStorage.getItem("lang") ? localStorage.getItem("lang") : "Eng");
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    const changeLang = (to) => {
        localStorage.setItem("lang", to);
        setLang(to);
        window.location.reload();
    }

    return(
        <div className="lang-changer">
            <Twemoji text="🇬🇧" onlyEmojiClassName={lang === "Eng" ? "active": ""} onClick={() => changeLang("Eng")} />
            <Twemoji text="🇷🇺" onlyEmojiClassName={lang === "Ru" ? "active": ""} onClick={() => changeLang("Ru")} />
        </div>
    );
};

export default Settings;