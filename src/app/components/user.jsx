import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";

const User = (props) => {
  const {
    _id,
    name,
    profession,
    qualities,
    completedMeetings,
    rate,
    bookmark,
  } = props;

  return (
    <>
      <tr key={_id}>
        <td>{name}</td>
        <td>
          {qualities.map((item) => (
            <Qualitie key={item._id} {...item} />
          ))}
        </td>
        <td>{profession.name}</td>
        <td>{completedMeetings}</td>
        <td>{rate} /5</td>
        <td>
          <BookMark status={bookmark} {...props} />
        </td>
        <td>
          <button
            className="btn bg-danger"
            onClick={() => {
              props.onDelete(_id);
            }}
          >
            delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default User;
