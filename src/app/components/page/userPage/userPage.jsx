import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import QualitiesList from "../../ui/qualities";
import { useHistory } from "react-router-dom";
const UserPage = ({ id }) => {
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(id).then((data) => setUser(data));
    }, []);
    const history = useHistory();

    const handleToEdit = () => {
        history.push("/users/" + id + "/edit");
    };

    if (user) {
        return (
            <>
                <h2>{user.name}</h2>
                <h3>{`Профессия: ${user.profession.name}`}</h3>
                <p>{`completedMeetings: ${user.completedMeetings}`}</p>
                <QualitiesList qualities={user.qualities} />
                <h3>{`Rate: ${user.rate}`}</h3>
                <button
                    className="btn btn-outline-primary m-2"
                    onClick={() => {
                        handleToEdit();
                    }}
                >
                    Изменить
                </button>
            </>
        );
    }
    return "Loading...";
};

UserPage.propTypes = {
    id: PropTypes.string.isRequired
};

export default UserPage;
