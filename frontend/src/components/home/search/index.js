import React from "react";
import words from "../../../words";

const Search = () => {
    const text = words().home.search_input;
    return(
        <div className="home-component box p-3 mb-3 mt-5">
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