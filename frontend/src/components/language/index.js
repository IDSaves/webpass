import React, { useState } from "react";
import { Twemoji } from "react-emoji-render";
import "./index.scss";

const Language = () => {
    const [active, setActive] = useState(localStorage.getItem("lang") ? localStorage.getItem("lang") === "Eng" ? "Eng" : "Ru" : "Eng");

    const changeLang = (to) => {
        localStorage.setItem("lang", to);
        setActive(to);
        window.location.reload();
    }

    return(
        <div className="lang-changer">
            <Twemoji text="🇬🇧" onlyEmojiClassName={active === "Eng" ? "active": ""} onClick={() => changeLang("Eng")} />
            <Twemoji text="🇷🇺" onlyEmojiClassName={active === "Ru" ? "active": ""} onClick={() => changeLang("Ru")} />
        </div>
    );
};

export default Language;