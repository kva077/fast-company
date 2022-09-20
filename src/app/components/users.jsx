import React from "react";
import User from "./user";

const Users = ({ users, ...rest }) => {
  return (
    <>
      <table className="table" hidden={users.length ? "" : "hidden"}>
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качество</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col">Избранное</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <User {...rest} {...user} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
