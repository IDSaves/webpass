import React, { useEffect, useState } from "react";
import nickGen from "project-name-generator";

const images = (() => {
    let r = require.context("./avatars", false, /.*\.svg$/);
    let images = {};
    r.keys().map((item, index) => { images[item.slice(2).split(".")[0]] = r(item); });
    return images;
})();

const networks = [
    "fab fa-facebook-square",
    "fab fa-instagram",
    "fab fa-snapchat-square",
    "fab fa-youtube",
    "fas fa-envelope-square",
    "fab fa-github",
    "fab fa-steam",
    "fab fa-pinterest",
    "fab fa-telegram"
];

const rand = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

const pickNetworks = () => {
    let allNetworks = [...networks];
    let result = [];
    let amount = rand(3, 6);
    for (let i = 0; i < amount; i++) {
        let picked = rand(1, allNetworks.length - 1);
        result.push(allNetworks[picked])
        allNetworks.splice(picked, 1);
    }
    return result;
}

const Example = () => {
    const [user, setUser] = useState({avatar: "", name: "", networks: []});
    const [hide, setHide] = useState(false);

    useEffect(() => {
        generateUser();
        let usersLoop = setInterval(() => {
            setHide(true);
            setTimeout(() => {
                generateUser();
                setTimeout(() => setHide(false), 500)
            }, 500)
        }, 10000);
        return () => {
            clearInterval(usersLoop);
        }
    }, []);

    function generateUser() {
        const id = rand(1, 50);
        const generatedNickname = nickGen({ words: 2 }).raw;
        setUser({
            avatar: images[`${id}-male`] ? images[`${id}-male`] : images[`${id}-female`],
            name: generatedNickname.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" "),
            networks: pickNetworks()
        });
    }

    return(
        <div className="box example-passport mt-5 p-3 text-center">
            <div className={hide ? "hide" : undefined}>
                <img src={user.avatar} className="img-fluid" alt="Avatar"/>
                <h4 className="mt-3">{user.name}</h4>

                {user.networks.map((item, i) => (
                    <i className={item} key={i} />
                ))}
            </div>
        </div>
    );
};

export default Example;