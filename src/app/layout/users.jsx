import React from "react";
import User from "../components/user";
import UsersList from "../components/usersList";
import { useParams } from "react-router-dom";

const Users = () => {
    const { userId } = useParams();

    return <>{userId ? <User id={userId} /> : <UsersList />}</>;
};

export default Users;
