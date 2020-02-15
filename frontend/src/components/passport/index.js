import React, { useEffect, useState, Fragment } from "react";
import words from "../../words";
import Main from "./main";
import Social from "./social";
import Personal from "./personal";
import api from "../../api";
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
            const data = await api("passport", { code: match.params.code })
            let done = data.data.passport;
            if (done.personal.bdate) {
                let bdate = new Date(parseInt(done.personal.bdate));
                let convertedBDate = bdate.getDate();
                convertedBDate += ` ${text.months[bdate.getMonth()]} `;
                convertedBDate += bdate.getFullYear();
                done.personal.bdate = convertedBDate;
            }
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
                    <Main state={info} />
                    
                    <Social state={info.social} />
                    <Personal state={info.personal} text={text} />

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
