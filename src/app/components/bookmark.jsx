import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ status, ...rest }) => {
    const halfClass = "bi bi-bookmark";
    return (
        <button onClick={() => rest.onToogleBookMark(rest._id)}>
            <i className={status ? `${halfClass}-fill` : halfClass}></i>
        </button>
    );
};
BookMark.propTypes = {
    status: PropTypes.bool.isRequired,
    rest: PropTypes.object.isRequired
};

export default BookMark;
