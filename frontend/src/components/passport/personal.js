import React from "react";
import { Twemoji } from "react-emoji-render";
import countries from "../../countries";

const Personal = ({ state, text }) => {

    const websiteToFormat = (website) => {
        if (website.includes("https://") || website.includes("http://")) {
            if (website.length > 22) return website.slice(0, 19) + "...";
            return website;
        }
        else {
            if (website.length > 22) return `http://${website.slice(0, 12)}...`;
            return `http://${website}`;
        }
    }

    const websiteLinkToFormat = (website) => {
        if (website.includes("https://") || website.includes("http://")) {
            if (website.slice(0, 8) !== "https://" && website.slice(0, 7) !== "http://") {
                return `http://${website}`;
            }
            return website;
        }
        return `http://${website}`;
    }

    if (state.status || state.email || state.bdate || state.country) {
        return(
            <div className="box pass-comp mb-3 p-3">
                <div className="table-responsive">
                    <table className="table mb-0">
                        <tbody>
                            {state.status && (
                                <tr>
                                    <th scope="row">{text.status}</th>
                                    <td>{state.status}</td>
                                </tr>
                            )}
                            {state.website && (
                                <tr>
                                    <th scope="row">{text.website}</th>
                                    <td data-toggle="tooltip" data-placement="top" title={websiteLinkToFormat(state.website)}><a href={websiteLinkToFormat(state.website)} target="_blank">{websiteToFormat(state.website)}</a></td>
                                </tr>
                            )}
                            {state.email && (
                                <tr>
                                    <th scope="row">{text.email}</th>
                                    <td>{state.email}</td>
                                </tr>
                            )}
                            {state.bdate ? (
                                <tr>
                                    <th scope="row">{text.bdate}</th>
                                    <td>{state.bdate}</td>
                                </tr>
                            ): ""}
                            {state.country && (
                                <tr>
                                    <th scope="row">{text.country}</th>
                                    <td><Twemoji text={countries(state.country).emoji} /> {countries(state.country).name}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
    return null;
};

export default Personal;
