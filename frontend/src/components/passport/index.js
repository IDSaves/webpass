import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { Twemoji } from "react-emoji-render";
import countries from "../../countries";
import words from "../../words";
import Social from "./social";
import "./index.scss";

const Passport = ({ match }) => {
    const [info, setInfo] = useState({});
    const text = words().passport;
    document.title = `${text.document} @${match.params.code}`

    useEffect(() => {
        loadPassport();
    }, [])

    const loadPassport = async () => {
        try {
            const data = await axios.post("/graphql", {
                query: `
                    query {
                        passport(code: "${match.params.code}") {
                            avatar
                            personal {
                                nickname
                                name
                                surname
                                status
                                email
                                bdate
                                country
                            }
                            social {
                                twitter
                                facebook
                                vk
                                instagram
                                youtube
                                reddit
                                github
                                steam
                                telegram
                                discord
                                snapchat
                                soundcloud
                                mixer
                                twitch
                            }
                            creation_date
                        }
                    }
                `
            });
            let done = data.data.data.passport;
            let bdate = new Date(parseInt(done.personal.bdate));
            let convertedBDate = bdate.getDate();

            switch (bdate.getMonth()) {
                case 0:
                    convertedBDate += ` ${text.months[bdate.getMonth()]} `;
                    break;
                case 1:
                    convertedBDate += ` ${text.months[bdate.getMonth()]} `;
                    break;
                case 2:
                    convertedBDate += ` ${text.months[bdate.getMonth()]} `;
                    break;
                case 3:
                    convertedBDate += ` ${text.months[bdate.getMonth()]} `;
                    break;
                case 4:
                    convertedBDate += ` ${text.months[bdate.getMonth()]} `;
                    break;
                case 5:
                    convertedBDate += ` ${text.months[bdate.getMonth()]} `;
                    break;
                case 6:
                    convertedBDate += ` ${text.months[bdate.getMonth()]} `;
                    break;
                case 7:
                    convertedBDate += ` ${text.months[bdate.getMonth()]} `;
                    break;
                case 8:
                    convertedBDate += ` ${text.months[bdate.getMonth()]} `;
                    break;
                case 9:
                    convertedBDate += ` ${text.months[bdate.getMonth()]} `;
                    break;
                case 10:
                    convertedBDate += ` ${text.months[bdate.getMonth()]} `;
                    break;
                case 11:
                    convertedBDate += ` ${text.months[bdate.getMonth()]} `;
                    break;
            }
            convertedBDate += bdate.getFullYear();
            done.personal.bdate = convertedBDate;
            setInfo(done);
        }
        catch (e) {
            setInfo({error: "Server error"});
        } 
    }

    return(
        <Fragment>
            <h5 className="text-info text-center">@{match.params.code}</h5>
            {!info.error ? Object.entries(info).length != 0 ? (
                <Fragment>
                    <div className="box pass-comp mt-5 mb-3 p-3">
                        <img className="mb-3" alt="avatar" src={info.avatar} />
                        <h5 className={`${(!info.personal.name && !info.personal.surname) && "mb-0"} text-center`}>{info.personal.nickname}</h5>
                        {info.personal.name || info.personal.surname ? (
                            <h6 className="text-muted mb-0 text-center">{`${info.personal.name} ${info.personal.surname}`}</h6>
                        ) : ""}
                    </div>
                    
                    <Social state={info.social} />

                    {info.personal.status || info.personal.email || info.personal.bdate || info.personal.country ? (
                        <div className="box pass-comp mb-3 p-3">
                            <div className="table-responsive">
                                <table className="table mb-0">
                                    <tbody>
                                        {info.personal.status && (
                                            <tr>
                                                <th scope="row">{text.status}</th>
                                                <td>{info.personal.status}</td>
                                            </tr>
                                        )}
                                        {info.personal.email && (
                                            <tr>
                                                <th scope="row">{text.email}</th>
                                                <td>{info.personal.email}</td>
                                            </tr>
                                        )}
                                        {info.personal.bdate ? (
                                            <tr>
                                                <th scope="row">{text.bdate}</th>
                                                <td>{info.personal.bdate}</td>
                                            </tr>
                                        ): ""}
                                        {info.personal.country && (
                                            <tr>
                                                <th scope="row">{text.country}</th>
                                                <td><Twemoji text={countries(info.personal.country).emoji} /> {countries(info.personal.country).name}</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ) : ""}
                </Fragment>
            ) : (
                <div className="box pass-comp text-info text-center mt-5 mb-3 p-3">
                    <h3 className="mb-0">{text.loading}</h3>
                </div>
            ) : (
                <div className="box pass-comp text-danger text-center mt-5 mb-3 p-3">
                    <h3 className="mb-0">{text.error}</h3>
                </div>
            )}
        </Fragment>
    );
};

export default Passport;
