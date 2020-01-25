import React from "react";
import words from "../../../words";

const Search = () => {
    const text = localStorage.getItem("lang") === "Ru" ? words("ru").home.search_input : words().home.search_input;
    return(
        <div className="box p-3">
            <div className="input-group">
                <input type="text" className="form-control" placeholder={text} />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="submit">
                        <i className="fas fa-search" />
                    </button>
                </div>
            </div>
        </div>
    );
}; 

export default Search;