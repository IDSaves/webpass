import React, { useEffect, useState, Fragment } from "react";
import { useToasts } from "react-toast-notifications";
import axios from "axios";
import words from "../../words";
import Avatar from "./avatar";
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
    const [personal, setPersonal] = useState({});
    const [social, setSocial] = useState({});
    const [confirmation, setConfirmation] = useState("");
    const { addToast, removeToast, removeAllToasts, toastStack  } = useToasts();
    const text = words().creation;
    document.title = "Passport creation";

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

    const create = () => {
        let errors = [];
        
        if (avatar.file) {
            if (avatar.file.type !== "image/png" && avatar.file.type !== "image/jpeg") {
                launchErrorToast("Only png and jpeg are valid!");
                errors.push("Avatar");
            }
        }
        else {
            launchErrorToast("Avatar is required");
            errors.push("Avatar");
        }

        if (!personal.nickname) {
            launchErrorToast("Nickname is required");
            errors.push("Nickname");
        }

        if (Object.keys(social).length === 0) {
            launchErrorToast("You must enter at least one social network");
            errors.push("Social");
        }

        if (!confirmation) {
            launchErrorToast("Confirmation email is required");
            errors.push("confirmation");
        }
        else {
            if (!validateEmail(confirmation)) {
                launchErrorToast("You must enter a valid confirmation email");
                errors.push("confirmation");
            }
        }

        if (errors.length === 0)
            addToast("Passport created", {
                appearance: 'success',
                autoDismiss: true,
            });
        if (toastStack.length === 5) removeToast(toastStack[0].id)
    }

    return(
        <Fragment>
            <h5 className="text-success text-center">{text.title}</h5>
            <div className="mb-5 mt-5 creation">

                <Avatar state={avatar} handleAvatar={handleAvatar} />

                <div className="row mt-4 mb-4">

                    <div className="col-xl-6 mb-3">
                        <Personal state={personal} handlePersonal={handlePersonal}/>
                    </div>

                    <div className="col-xl-6">
                        <Social state={social} handleSocial={handleSocial}/>
                    </div>

                </div>

                <Confirmation state={confirmation} handleConfirmation={handleConfirmation} create={create} />

            </div>
        </Fragment>
    );
};

export default Create;