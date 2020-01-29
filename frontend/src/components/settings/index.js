import React, { useState } from "react";
import { Twemoji } from "react-emoji-render";
import words from "../../words";
import "./index.scss";

const Settings = () => {
    const [lang, setLang] = useState(words(true));
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    const changeLang = (to) => {
        localStorage.setItem("lang", to);
        window.location.reload();
    }

    const changeTheme = (to) => {
        localStorage.setItem("theme", to);
        window.location.reload();
    }

    return(
        <div className="settings text-center">

            <div className="btn-group" role="group">
                <button type="button" className="btn btn-link" onClick={() => changeLang(lang === "Ru" ? "Eng" : "Ru")}>
                    {lang === "Ru" ? (
                        <Twemoji text="🇷🇺" />
                    ) : (
                        <Twemoji text="🇬🇧" />
                    )}
                </button>
                <button type="button" className="btn btn-link" onClick={() => changeTheme(theme === "light" ? "dark" : "light")}>
                    {theme === "light" ? (
                        <i className="fas fa-sun"></i>
                    ) : (
                        <i className="fas fa-moon"></i>
                    )}
                </button>
            </div>

        </div>
    );
};

export default Settings;