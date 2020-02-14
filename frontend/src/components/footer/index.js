import React from "react";
import Settings from "../settings";
import { Link } from "react-router-dom";
import "./index.scss";

const Footer = () => {
    return(
        <div className="footer p-2 mt-4">
            <ul className="nav text-center nav-justified">
                <li className="nav-item">
                    <p>contact@webpass.app</p>
                </li>
                <li className="nav-item">
                    <Link to="/cookies-policy" className="text-primary">Cookies Policy</Link>
                </li>
            </ul>

            <p className="text-center">webpass.app @2020</p>
            <Settings />
        </div>
    );
};

export default Footer;