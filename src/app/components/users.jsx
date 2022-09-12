import React from "react";
import { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
    let usersArr = [...users];
    usersArr.splice(userId, 1);
    return setUsers(usersArr);
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
          {users.map((obj) => (
            <>
              <tr key={obj._id}>
                <td>{obj.name}</td>
                <td>
                  {obj.qualities.map((quality) => (
                    <b className={`badge bg-${quality.color} me-2`}>
                      {quality.name}
                    </b>
                  ))}
                </td>
                <td>{obj.profession.name}</td>
                <td>{obj.completedMeetings}</td>
                <td>{obj.rate} /5</td>
                <td>
                  <button
                    className="btn bg-danger"
                    onClick={() => {
                      handleDelete(users.indexOf(obj));
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
