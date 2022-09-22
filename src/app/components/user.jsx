import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";
import PropTypes from "prop-types";

const User = (props) => {
    const {
        _id,
        name,
        profession,
        qualities,
        completedMeetings,
        rate,
        bookmark
    } = props;

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
User.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    profession: PropTypes.object.isRequired,
    qualities: PropTypes.object.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    bookmark: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default User;
