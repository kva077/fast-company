import React from "react";
import PropTypes from "prop-types";

const Search = ({ onSearch }) => {
    return (
        <>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                    onChange={onSearch}
                ></input>
            </div>
        </>
    );
};

Search.propTypes = {
    onSearch: PropTypes.func.isRequired
};

export default Search;
