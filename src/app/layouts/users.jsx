import React from "react";
import { useParams, Redirect } from "react-router-dom";
import EditUserPage from "../components/page/editUserPage";
import UserPage from "../components/page/userPage";
import UsersListPage from "../components/page/usersListPage";
import UsersLoader from "../components/ui/hoc/usersLoader";
// import { useSelector } from "react-redux";
// import { getCurrentUserId } from "../store/users";
import { useAuth } from "../hooks/useAuth";
const Users = () => {
    const params = useParams();
    const { userId, edit } = params;
    // const currentUserId = useSelector(getCurrentUserId());
    const currentUser = useAuth();

    return (
        <UsersLoader>
            {userId ? (
                edit ? (
                    userId === currentUser._id ? (
                        <EditUserPage />
                    ) : (
                        <Redirect to={`/users/${currentUser._id}/edit`} />
                    )
                ) : (
                    <UserPage userId={userId} />
                )
            ) : (
                <UsersListPage />
            )}
        </UsersLoader>
    );
};

export default Users;
