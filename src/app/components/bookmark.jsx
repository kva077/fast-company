import React from "react";

const BookMark = ({ status, ...rest }) => {
  console.log(status);
  const halfClass = "bi bi-bookmark";
  return (
    <button onClick={() => rest.onToogleBookMark(rest._id)}>
      <i className={status ? `${halfClass}-fill` : halfClass}></i>
    </button>
  );
};

export default BookMark;
