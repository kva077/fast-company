import React from "react";
import PropTypes from "prop-types";
const Qualitie = ({ color, name, _id }) => {
    return (
        <span key={_id} className={"badge m-1 bg-" + color}>
            {name}
        </span>
    );
};
Qualitie.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.object.isRequired,
    _id: PropTypes.object.isRequired
};

export default Qualitie;
