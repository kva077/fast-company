import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";
import PropTypes from "prop-types";

const User = ({
    _id,
    name,
    profession,
    qualities,
    completedMeetings,
    rate,
    bookmark,
    onDelete,
    onToogleBookMark
}) => {
    return (
        <>
            <tr key={_id}>
                <td>{name}</td>
                <td>
                    {qualities.map((qual) => (
                        <Qualitie {...qual} key={qual._id} />
                    ))}
                </td>
                <td>{profession.name}</td>
                <td>{completedMeetings}</td>
                <td>{rate} /5</td>
                <td>
                    <BookMark
                        bookmark={bookmark}
                        onClick={() => {
                            onToogleBookMark(_id);
                        }}
                    />
                </td>
                <td>
                    <button
                        className="btn bg-danger"
                        onClick={() => {
                            onDelete(_id);
                        }}
                    >
                        delete
                    </button>
                </td>
            </tr>
        </>
    );
};
User.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    profession: PropTypes.object.isRequired,
    qualities: PropTypes.array.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    bookmark: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToogleBookMark: PropTypes.func.isRequired
};

export default User;
