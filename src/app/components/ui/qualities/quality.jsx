import React from "react";
import PropTypes from "prop-types";
import { useQualities } from "../../../hooks/useQuality";

const Quality = ({ id }) => {
    const { isLoading, getQuality } = useQualities();
    const qual = getQuality(id);
    if (!isLoading) {
        return (
            <span className={"badge m-1 bg-" + qual.color}>{qual.name}</span>
        );
    } else return "Loading...";
};
Quality.propTypes = {
    id: PropTypes.string
};

export default Quality;
