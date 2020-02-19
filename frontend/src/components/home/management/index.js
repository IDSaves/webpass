import React, { useState } from "react";
import words from "../../../words";
import api from "../../../api";
import { useToasts } from "react-toast-notifications";

const Management = () => {
    const [key, setKey] = useState("");
    const [prevKey, setPrevKey] = useState("");
    const { addToast, removeAllToasts } = useToasts();
    const prevPassports = JSON.parse(localStorage.getItem("passports"));
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
                        if (!localStorage.getItem("passports")) {
                            localStorage.setItem("passports", JSON.stringify([key]));
                        }
                        else {
                            let current = JSON.parse(localStorage.getItem("passports")).slice(-4);
                            if (!current.includes(key)) {
                                current.push(key);
                                localStorage.setItem("passports", JSON.stringify(current)); 
                            }
                        }
                        window.location.href = `/manage/${key}`
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
            {prevPassports ? (
                <div className="prev-passports mb-3">
                    <h5>{text.history.title} <span className="text-warning">({text.history.span})</span></h5>
                    {prevPassports.map((pass, i) => (
                        <span><a href={`/manage/${pass}`} className="text-info" key={i}>@{pass.split(":")[0]}</a> </span>
                    ))}
                </div>
            ) : null}
            <div className="input-group">
                <input type="text" className="form-control" placeholder={text.management_button.input} onChange={(e) => setKey(e.target.value)} />
            </div>
            <button type="button" className="btn btn-info container-fluid mt-3" onClick={() => handleClick()} >{text.management_button.button}</button>
        </div>
    );
};  

export default Management;