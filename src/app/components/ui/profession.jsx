import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
    getProfessionById,
    getProfessionsLoadingStatus,
    loadProfessionsList
} from "../../store/professions";
import { useDispatch, useSelector } from "react-redux";

const Profession = ({ id }) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getProfessionsLoadingStatus());
    const prof = useSelector(getProfessionById(id));
    useEffect(() => {
        dispatch(loadProfessionsList());
    }, []);
    if (isLoading) return "Loading...";
    return <p>{prof.name}</p>;
};
Profession.propTypes = {
    id: PropTypes.string
};
export default Profession;
