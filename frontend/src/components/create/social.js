import React from "react";
import words from "../../words";

const Social = ({ state, handleSocial }) => {
    const text = words().creation.social_component;
    return(
        <div className="container-fluid box m-0 p-3">
            <h4 className="text-center mb-3">{text.title}</h4>

            <label>Twitter:</label>
            <div className="input-group mb-3">
                <div className="input-group-prepend d-none d-sm-block">
                    <span className="input-group-text">twitter.com/</span>
                </div>
                <input type="text" className="form-control" id="twitter" onChange={(e) => handleSocial(e)} />
            </div>

            <label>Facebook:</label>
            <div className="input-group mb-3">
                <div className="input-group-prepend d-none d-sm-block">
                    <span className="input-group-text">facebook.com/</span>
                </div>
                <input type="text" className="form-control" id="facebook" onChange={(e) => handleSocial(e)} />
            </div>

            <label>Vk:</label>
            <div className="input-group mb-3">
                <div className="input-group-prepend d-none d-sm-block">
                    <span className="input-group-text">vk.com/</span>
                </div>
                <input type="text" className="form-control" id="vk" onChange={(e) => handleSocial(e)} />
            </div>

            <label>Instagram:</label>
            <div className="input-group mb-3">
                <div className="input-group-prepend d-none d-sm-block">
                    <span className="input-group-text">instagram.com/</span>
                </div>
                <input type="text" className="form-control" id="instagram" onChange={(e) => handleSocial(e)} />
            </div>

            <label>Youtube:</label>
            <div className="input-group mb-3">
                <div className="input-group-prepend d-none d-sm-block">
                    <span className="input-group-text">youtube.com/</span>
                </div>
                <input type="text" className="form-control" id="youtube" onChange={(e) => handleSocial(e)} />
            </div>

            <label>Reddit:</label>
            <div className="input-group mb-3">
                <div className="input-group-prepend d-none d-sm-block">
                    <span className="input-group-text">reddit.com/user/</span>
                </div>
                <input type="text" className="form-control" id="reddit" onChange={(e) => handleSocial(e)} />
            </div>

            <label>Github:</label>
            <div className="input-group mb-3">
                <div className="input-group-prepend d-none d-sm-block">
                    <span className="input-group-text">github.com/</span>
                </div>
                <input type="text" className="form-control" id="github" onChange={(e) => handleSocial(e)} />
            </div>

            <label>Steam:</label>
            <div className="input-group mb-3">
                <div className="input-group-prepend d-none d-sm-block">
                    <span className="input-group-text">steamcommunity.com/</span>
                </div>
                <input type="text" className="form-control" id="steam" onChange={(e) => handleSocial(e)} />
            </div>

            <label>Telegram:</label>
            <div className="input-group mb-3">
                <div className="input-group-prepend d-none d-sm-block">
                    <span className="input-group-text">t.me/</span>
                </div>
                <input type="text" className="form-control" id="telegram" onChange={(e) => handleSocial(e)} />
            </div>

            <label>Discord:</label>
            <div className="input-group mb-3">
                <input type="text" className="form-control" id="discord" onChange={(e) => handleSocial(e)} />
            </div>

            <label>Snapchat:</label>
            <div className="input-group mb-3">
                <div className="input-group-prepend d-none d-sm-block">
                    <span className="input-group-text">snapchat.com/add/</span>
                </div>
                <input type="text" className="form-control" id="snapchat" onChange={(e) => handleSocial(e)} />
            </div>

            <label>SoundCloud:</label>
            <div className="input-group mb-3">
                <div className="input-group-prepend d-none d-sm-block">
                    <span className="input-group-text">soundcloud.com/</span>
                </div>
                <input type="text" className="form-control" id="soundcloud" onChange={(e) => handleSocial(e)} />
            </div>

            <label>Mixer:</label>
            <div className="input-group mb-3">
                <div className="input-group-prepend d-none d-sm-block">
                    <span className="input-group-text">mixer.com</span>
                </div>
                <input type="text" className="form-control" id="mixer" onChange={(e) => handleSocial(e)} />
            </div>

            <label>Twitch:</label>
            <div className="input-group mb-3">
                <div className="input-group-prepend d-none d-sm-block">
                    <span className="input-group-text">twitch.tv/</span>
                </div>
                <input type="text" className="form-control" id="twitch" onChange={(e) => handleSocial(e)} />
            </div>
        </div>
    );
};

export default Social;