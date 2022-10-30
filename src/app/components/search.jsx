import React from "react";
import PropTypes from "prop-types";

const Search = ({ onSearch, searchName }) => {
    return (
        <>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                    onChange={onSearch}
                    value={searchName}
                ></input>
            </div>
        </>
    );
};

Search.propTypes = {
    onSearch: PropTypes.func.isRequired,
    searchName: PropTypes.string.isRequired
};

export default Search;
