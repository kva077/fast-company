import React from "react";
import { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };
  const renderPhrase = (number) => {
    let spanText;
    let color;
    if (!number) {
      color = "danger";
      spanText = "Никто с тобой не тусанет";
    } else if (number > 1 && number < 5) {
      color = "primary";
      spanText = `${number} человека тусанут с тобой сегодня`;
    } else {
      color = "primary";
      spanText = `${number} человек тусанет с тобой сегодня`;
    }
    return <span className={`badge bg-${color}`}>{spanText}</span>;
  };
  return (
    <>
      <h2>{renderPhrase(users.length)}</h2>
      <table className="table" hidden={users.length ? "" : "hidden"}>
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качество</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <>
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>
                  {user.qualities.map((item) => (
                    <span
                      className={"badge m-1 bg-" + item.color}
                      key={item._id}
                    >
                      {item.name}
                    </span>
                  ))}
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate} /5</td>
                <td>
                  <button
                    className="btn bg-danger"
                    onClick={() => {
                      handleDelete(user._id);
                    }}
                  >
                    delete
                  </button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
