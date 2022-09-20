import React from "react";

const SearchStatus = ({ length }) => {
  const renderPhrase = (length) => {
    let spanText;
    let color;
    if (!length) {
      color = "danger";
      spanText = "Никто с тобой не тусанет";
    } else if (length > 1 && length < 5) {
      color = "primary";
      spanText = `${length} человека тусанут с тобой сегодня`;
    } else {
      color = "primary";
      spanText = `${length} человек тусанет с тобой сегодня`;
    }
    return (
      <h2>
        <span className={`badge bg-${color}`}>{spanText}</span>
      </h2>
    );
  };

  return renderPhrase(length);
};

export default SearchStatus;
