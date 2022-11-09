import React from "react";
import UserPage from "../components/page/userPage";
import UserEditPage from "../components/page/userEditPage";
import UsersListPage from "../components/page/usersListPage";
import { useParams } from "react-router-dom";

const Users = () => {
    const { userId, edit } = useParams();
    if (edit) return <UserEditPage id={userId} />;
    return <>{userId ? <UserPage id={userId} /> : <UsersListPage />}</>;
};

export default Users;
