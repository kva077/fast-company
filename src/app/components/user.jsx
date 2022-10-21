import React, { useState, useEffect } from "react";
import QualitiesList from "./qualitiesList";
import PropTypes from "prop-types";
import api from "../api";
import { useHistory } from "react-router-dom";

const User = ({ id }) => {
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(id).then((data) => setUser(data));
    }, []);
    const history = useHistory();

    const handleShowUsers = () => {
        history.push("/users");
    };

    if (user) {
        return (
            user && (
                <>
                    <h1>{user.name}</h1>
                    <span>{`Профессия: ${user.profession.name}`}</span> <hr />
                    <span>{`Встретился, раз: ${user.completedMeetings}`}</span>
                    <hr />
                    <QualitiesList qualities={user.qualities} />
                    <hr />
                    <span>{`Оценка: ${user.rate}`}</span>
                    <hr />
                    <button
                        onClick={() => {
                            handleShowUsers();
                        }}
                    >
                        Все пользователи
                    </button>
                </>
            )
        );
    }
    return "loading...";
};

User.propTypes = {
    id: PropTypes.string.isRequired
};

export default User;
