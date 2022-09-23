import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ bookmark, ...rest }) => {
    const halfClass = "bi bi-bookmark";
    return (
        <button {...rest}>
            <i className={bookmark ? `${halfClass}-fill` : halfClass}></i>
        </button>
    );
};
BookMark.propTypes = {
    bookmark: PropTypes.bool.isRequired
};

export default BookMark;
