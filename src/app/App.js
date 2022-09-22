import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from "./api";

function App() {
    const [users, setUsers] = useState(api.users.fetchAll());
    const [searchStatus, setSearchStatus] = useState(users.length);

    const handleDelete = (userId) => {
        setUsers((prevState) =>
            prevState.filter((user) => user._id !== userId)
        );
        setSearchStatus((prevState) => prevState - 1);
    };
    const handleToggleBookMark = (id) => {
        const userIndex = users.findIndex((item) => item._id === id);
        const usersList = [...users];
        usersList[userIndex].bookmark = !usersList[userIndex].bookmark;
        setUsers(usersList);
    };

    return (
        <div>
            <SearchStatus length={searchStatus} />
            <Users
                users={users}
                onToogleBookMark={handleToggleBookMark}
                onDelete={handleDelete}
            />
        </div>
    );
}

export default App;
