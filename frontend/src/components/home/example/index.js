import React, { useEffect, useState } from "react";
// import randomName from "random-name";
// import nickGenerator from "nick-generator";
import nickGen from "project-name-generator";

const images = (() => {
    let r = require.context("./avatars", false, /.*\.svg$/);
    let images = {};
    r.keys().map((item, index) => { images[item.slice(2).split(".")[0]] = r(item); });
    return images;
})();

const rand = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

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

const Example = () => {
    const [id, setId] = useState(rand(1, 50));
    const avatar = images[`${id}-male`] ? images[`${id}-male`] : images[`${id}-female`];
    const generatedNickname = nickGen({ words: 2 }).raw;
    const name = generatedNickname.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    const pickedNetworks = (() => {
        let result = [];
        let amount = rand(3, 6);
        for (let i = 0; i < amount; i++) {
            let picked = rand(1, networks.length - 1);
            result.push(networks[picked])
            networks.splice(picked, 1);
        }
        return result;
    })();

    return(
        <div className="example-passport mt-5 p-3 text-center">
            <img src={images[`${id}-male`] ? images[`${id}-male`] : images[`${id}-female`]} className="img-fluid" alt="Avatar"/>
            <h4 className="mt-3">{name}</h4>

            <div>
                {pickedNetworks.map((item, i) => (
                    <i className={item} key={i} />
                ))}
            </div>
        </div>
    );
};

export default Example;