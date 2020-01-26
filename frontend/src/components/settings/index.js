import React, { useState } from "react";
import { Twemoji } from "react-emoji-render";
import "./index.scss";

const Settings = () => {
    const [lang, setLang] = useState(localStorage.getItem("lang") ? localStorage.getItem("lang") : "Eng");
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

            <div class="btn-group" role="group">
                <button type="button" class="btn btn-link" onClick={() => changeLang(lang === "Ru" ? "Eng" : "Ru")}>
                    {lang === "Ru" ? (
                        <Twemoji text="🇷🇺" />
                    ) : (
                        <Twemoji text="🇬🇧" />
                    )}
                </button>
                <button type="button" class="btn btn-link" onClick={() => changeTheme(theme === "light" ? "dark" : "light")}>
                    {theme === "light" ? (
                        <i class="fas fa-moon"></i>
                    ) : (
                        <i class="fas fa-sun"></i>
                    )}
                </button>
            </div>

        </div>
    );
};

export default Settings;