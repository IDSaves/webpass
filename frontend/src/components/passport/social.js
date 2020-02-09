import React, { Fragment } from "react";

const networksList = [
    "fab fa-twitter",
    "fab fa-facebook-square",
    "fab fa-vk",
    "fab fa-instagram",
    "fab fa-youtube",
    "fab fa-reddit",
    "fab fa-github",
    "fab fa-steam",
    "fab fa-telegram",
    "fab fa-discord",
    "fab fa-snapchat-square",
    "fab fa-soundcloud",
    "fab fa-mixer",
    "fab fa-twitch"
];

const Networks = ({ state }) => {
    let array = [];
    for (const [net, data] of Object.entries(state)) {
        if (data) {
            switch(net) {
                case "twitter":
                    array.push({
                        type: net,
                        link: `https://twitter.com/${data}`,
                        num: 0
                    });
                    break;
                case "facebook":
                    array.push({
                        type: net,
                        link: `https://facebook.com/${data}`,
                        num: 1
                    });
                    break;
                case "vk":
                    array.push({
                        type: net,
                        link: `https://vk.com/${data}`,
                        num: 2
                    });
                    break;
                case "instagram":
                    array.push({
                        type: net,
                        link: `https://instagram.com/${data}`,
                        num: 3
                    });
                    break;
                case "youtube":
                    array.push({
                        type: net,
                        link: `https://youtube.com/${data}`,
                        num: 4
                    });
                    break;
                case "reddit":
                    array.push({
                        type: net,
                        link: `https://reddit.com/user/${data}`,
                        num: 5
                    });
                    break;
                case "github":
                    array.push({
                        type: net,
                        link: `https://github.com/${data}`,
                        num: 6
                    });
                    break;
                case "steam":
                    array.push({
                        type: net,
                        link: `https://steamcommunity.com/${data}`,
                        num: 7
                    });
                    break;
                case "telegram":
                    array.push({
                        type: net,
                        link: `https://t.me/${data}`,
                        num: 8
                    });
                    break;
                case "discord":
                    array.push({
                        type: net,
                        link: data,
                        num: 9
                    });
                    break;
                case "snapchat":
                    array.push({
                        type: net,
                        link: `https://snapchat.com/add/${data}`,
                        num: 10
                    });
                    break;
                case "soundcloud":
                    array.push({
                        type: net,
                        link: `https://soundcloud.com/${data}`,
                        num: 11
                    });
                    break;
                case "mixer":
                    array.push({
                        type: net,
                        link: `https://mixer.com/${data}`,
                        num: 12
                    });
                    break;
                case "twitch":
                    array.push({
                        type: net,
                        link: `https://twitch.tv/${data}`,
                        num: 13
                    });
                    break;
            }
        }
    }
    return (
        <Fragment>
            {array.map((item, i) => (
                <li className="nav-item" key={i}>
                    {item.type != "discord" ? (
                        <a className="nav-link" href={item.link} target="_blank"><i className={networksList[item.num]} /></a>
                    ) : (
                        <a className="nav-link" href="#" data-placement="top" data-toggle="popover" title="Discord" data-content={item.link} onClick={(e) => e.preventDefault()}><i className={networksList[item.num]} /></a>
                    )}
                </li>
            ))}
        </Fragment>
    )
}

const Social = ({ state }) => {
    return(
        <div className="box pass-comp mb-3 p-3">
            <ul className="nav nav-justified">
                <Networks state={state} />
            </ul>
        </div>
    );
};

export default Social;