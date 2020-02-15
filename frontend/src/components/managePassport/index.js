import React, { useEffect, useState, Fragment } from "react";
import { useToasts } from "react-toast-notifications";
import words from "../../words";
import api from "../../api";
import Avatar from "./avatar";
import Personal from "./personal";
import Social from "./social";
import Confirmation from "./confirm";

const toBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

const validateEmail = (email) => {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const ManagePassport = ({ match }) => {
    const [code, key] = match.params.key.split(":");
    const [check, setCheck] = useState(0);
    const [passData, setPassData] = useState({});
    const [avatar, setAvatar] = useState({});
    const [personal, setPersonal] = useState({});
    const [social, setSocial] = useState({});
    const [isBtnDisabled, setIsBtnDisabled] = useState(false);
    const { addToast, removeAllToasts } = useToasts();
    const text = words().manage;
    document.title = text.title;

    useEffect(() => {
        checkValid();
    }, [])

    const launchErrorToast = (content) => {
        addToast(content, {
            appearance: "error",
            autoDismiss: false,
        });
    }

    const checkValid = async () => {
        try {
            const check = await api("isKeyValid", { code, key });
            if (check.data.isKeyValid === true) {
                await loadPassData();
                setCheck(1);
            }
            else setCheck(2);
        }
        catch (e) {setCheck(3);}
    } 

    const loadPassData = async () => {
        try {
            const request = await api("passport", { code });
            setAvatar(request.data.passport.avatar);
            setSocial(request.data.passport.social);
            let pers = request.data.passport.personal;
            let bdate  = new Date(parseInt(pers.bdate));
            let convertedBDate = `${bdate.getFullYear()}-${bdate.getMonth() + 1 >= 10 ? bdate.getMonth() : "0" + (bdate.getMonth() + 1)}-${bdate.getDate()}`;
            pers.bdate = convertedBDate;
            setPersonal(pers);
        }
        catch (e) {setCheck(3);}
    }

    const handleAvatar = async (e) => {
        setAvatar({
            file: e.target.files[0],
            base64: await toBase64(e.target.files[0])
        });
    }

    const handlePersonal = (e) => {
        const pers = personal;
        pers[e.target.id] = e.target.value; 
        setPersonal(pers);
    }

    const handleSocial = (e) => {
        const soc = social;
        soc[e.target.id] = e.target.value;
        setSocial(soc);
    }

    const manage = async () => {
        removeAllToasts();
        let errors = [];
        
        if (avatar.file && (avatar.file.type !== "image/png" && avatar.file.type !== "image/jpeg")) {
            launchErrorToast(text.errors.avatar_type);
            errors.push("Avatar");
        }

        if (!personal.nickname) {
            launchErrorToast(text.errors.nickname);
            errors.push("Nickname");
        }
        else if (personal.nickname.length < 4) {
            launchErrorToast(text.errors.nickname_length);
            errors.push("Nickname");
        }

        if (personal.email && !validateEmail(personal.email)) {
            launchErrorToast(text.errors.public_email);
            errors.push("Public email");
        }

        if (Object.keys(social).length === 0) {
            launchErrorToast(text.errors.social);
            errors.push("Social");
        }

        if (errors.length === 0) {
            addToast(text.loading, {
                appearance: 'info',
                autoDismiss: false,
            });
            setIsBtnDisabled(true);
            try {
                let query = await api("managePassport", {
                    code: code,
                    key: key,
                    avatar: avatar.base64 ? avatar.base64.split(",")[1] : avatar,
                    personal: personal,
                    social: social
                })
                window.location.href = `/passport/${query.data.managePassport}`;
            }
            catch (e) {
                removeAllToasts();
                addToast(text.server_error, {
                    appearance: 'error',
                    autoDismiss: false,
                });
            }
        }

    }

    return (
        <Fragment>
            <h5 className="text-info text-center">Management</h5>

            <div className="mb-3 mt-5">
                {check === 0 ? (
                    <h4 className="text-info text-center">Loading...</h4>
                ): check === 1 ? (
                    <Fragment>
                        <Avatar handleAvatar={handleAvatar} state={avatar} />

                        <div className="row mt-4 mb-4">

                            <div className="col-xl-6 mb-3">
                                <Personal state={personal} handlePersonal={handlePersonal}/>
                            </div>

                            <div className="col-xl-6">
                                <Social state={social} handleSocial={handleSocial}/>
                            </div>

                        </div>
                        <Confirmation manage={manage} isBtnDisabled={isBtnDisabled} />

                    </Fragment>
                ): check === 2 ? (
                    <h4 className="text-danger text-center">Invalid passport key</h4>
                ): (
                    <h4 className="text-danger text-center">Server error</h4>
                )}
            </div>
        </Fragment>
    );
};

export default ManagePassport;