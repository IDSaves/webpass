import React from "react";
import words from "../../words";
import "./index.scss";

const Notification = () => {
    const text = words().cookies_notification;

    return (
        <div className="box cookies-notification text-center p-2 mb-5 rounded-0">
            <h5 className="mb-0">
                {text.first} {text.second} <a className="text-primary" href="/cookies-policy">{text.here}</a>. {text.third} <a className="text-primary" href="/" onClick={() => localStorage.setItem('cookies_accept', 'Yes')}>{text.ok}</a>
            </h5>
        </div>
    );
};

export default Notification;