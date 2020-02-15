import React, { useState } from "react";
import words from "../../../words";
import api from "../../../api";
import { useToasts } from "react-toast-notifications";

const Management = () => {
    const [key, setKey] = useState("");
    const [prevKey, setPrevKey] = useState("");
    const { addToast, removeAllToasts } = useToasts();
    const text = words().home;

    const handleClick = async () => {
        removeAllToasts();
        const data = key.split(":");
        if (prevKey !== key) {
            if (data.length === 2) {
                try {
                    const check = await api("isKeyValid", {
                        code: data[0],
                        key: data[1]
                    });
                    if (await check.data.isKeyValid === true) {
                        window.location.href = `/passport-management/${key}`
                    }
                    else {
                        setPrevKey(key);
                        addToast(text.management_errors.invalid, {
                            appearance: "error",
                            autoDismiss: false,
                        });
                    }
                }
                catch (e) {
                    addToast(text.management_errors.server, {
                        appearance: "error",
                        autoDismiss: false,
                    });
                }
            }
            else {
                addToast(text.management_errors.correct, {
                    appearance: "error",
                    autoDismiss: false,
                });
            }
        }
        else {
            addToast(text.management_errors.invalid, {
                appearance: "error",
                autoDismiss: false,
            });
        }
        
    }

    return(
        <div className="home-component box p-3 mb-3">
            <div className="input-group">
                <input type="text" className="form-control" placeholder={text.management_button.input} onChange={(e) => setKey(e.target.value)} />
            </div>
            <button type="button" className="btn btn-info container-fluid mt-3" onClick={() => handleClick()} >{text.management_button.button}</button>
        </div>
    );
};  

export default Management;