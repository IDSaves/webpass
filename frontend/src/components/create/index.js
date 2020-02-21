import React, { useEffect, useState, Fragment } from "react";
import { useToasts } from "react-toast-notifications";
import api from "../../api";
import words from "../../words";
import Avatar from "./avatar";
import Type from "./type";
import Personal from "./personal";
import Social from "./social";
import Confirmation from "./confirmation";
import "./index.scss";

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

const Create = () => {
    const [avatar, setAvatar] = useState({file: null, base64: ""});
    const [type, setType] = useState("person");
    const [personal, setPersonal] = useState({});
    const [social, setSocial] = useState({});
    const [confirmation, setConfirmation] = useState("");
    const [isBtnDisabled, setIsBtnDisabled] = useState(false);
    const { addToast, removeAllToasts } = useToasts();
    const text = words().creation_manage;
    document.title = text.cdocument;

    useEffect(() => {
        return () => removeAllToasts();
    }, [])

    const launchErrorToast = (content) => {
        addToast(content, {
            appearance: "error",
            autoDismiss: false,
        });
    }

    const handleConfirmation = (e) => setConfirmation(e.target.value);

    const handleAvatar = async (e) => {
        setAvatar({
            file: e.target.files[0],
            base64: await toBase64(e.target.files[0])
        });
    }

    const handleType = (e) => {
        setType(e.target.value);
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

    const create = async () => {
        removeAllToasts();
        let errors = [];
        
        // Avatar tests
        if (avatar.file) {
            if (avatar.file.type !== "image/png" && avatar.file.type !== "image/jpeg") {
                launchErrorToast(text.errors.avatar_type);
                errors.push("Avatar");
            }
        }
        else {
            launchErrorToast(text.errors.avatar);
            errors.push("Avatar");
        }

        // Personal tests
        if (!personal.nickname) {
            launchErrorToast(text.errors.nickname);
            errors.push("Nickname");
        }
        else if (personal.nickname.length < 4 || personal.nickname.length > 35) {
            launchErrorToast(text.errors.nickname_length);
            errors.push("Nickname");
        }

        if ((personal.name && personal.name.length >= 25) || (personal.surname && personal.surname.length >= 25)) {
            launchErrorToast(text.errors.name_surname_length);
            errors.push("name_surname");
        }

        if (personal.status && personal.status.length > 50) {
            launchErrorToast(text.errors.status_length);
            errors.push("status");
        }

        if (personal.email) {
            if (!validateEmail(personal.email)) {
                launchErrorToast(text.errors.public_email);
                errors.push("Public email");
            }
            else if (personal.email.split("@")[0].length >= 50) {
                launchErrorToast(text.errors.public_email_length);
                errors.push("Public email");
            }
        }

        // Social tests
        if (Object.keys(social).length === 0) {
            launchErrorToast(text.errors.social);
            errors.push("Social");
        }

        if (social.discord) {
            let dsplitted = social.discord.split("#");
            if (dsplitted.length === 1) {
                launchErrorToast(text.errors.discord_format);
                errors.push("Discord");
            }
            else {
                let [fdpart, sdpart] = dsplitted;
                if (fdpart.length >= 32) {
                    launchErrorToast(text.errors.discord_length);
                    errors.push("Discord");
                }
                else if (sdpart.length !== 4) {
                    launchErrorToast(text.errors.discord_format);
                    errors.push("Discord");
                }
            }
        }

        // Confirmation tests
        if (!confirmation) {
            launchErrorToast(text.errors.conf_email);
            errors.push("Confirmation");
        }
        else if (!validateEmail(confirmation)) {
            launchErrorToast(text.errors.conf_email_valid);
            errors.push("Confirmation");
        }

        if (errors.length === 0) {
            addToast(text.loading, {
                appearance: 'info',
                autoDismiss: false,
            });
            setIsBtnDisabled(true);
            try {
                let query = await api("createPassport", {
                    avatar: avatar.base64.split(",")[1],
                    type: type,
                    personal: personal,
                    social: social,
                    conf_email: confirmation
                })
                window.location.href = `/${query.data.createPassport}`;
            }
            catch (e) {
                setIsBtnDisabled(false);
                removeAllToasts();
                addToast(text.server_error, {
                    appearance: 'error',
                    autoDismiss: false,
                });
            }
        }

    }

    return(
        <Fragment>
            <h5 className="text-success text-center">{text.ctitle}</h5>
            <div className="mb-5 mt-5 creation">

                <Avatar state={avatar} handleAvatar={handleAvatar} />

                <div className="row mt-4 mb-4">

                    <div className="col-xl-6 mb-3">
                        <Type handleType={handleType} />
                        <Personal type={type} state={personal} handlePersonal={handlePersonal}/>
                    </div>

                    <div className="col-xl-6">
                        <Social state={social} handleSocial={handleSocial}/>
                    </div>

                </div>

                <Confirmation state={confirmation} handleConfirmation={handleConfirmation} create={create} isBtnDisabled={isBtnDisabled}/>

            </div>
        </Fragment>
    );
};

export default Create;