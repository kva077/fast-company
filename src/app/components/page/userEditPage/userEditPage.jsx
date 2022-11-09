import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import { useHistory } from "react-router-dom";
import { validator } from "../../../utils/validator";
import TextField from "../../common/form/textField";
import SelectField from "../../common/form/selectField";
import RadioField from "../../common/form/radioField";
import MultiSelectField from "../../common/form/multiSelectField";

const UserEditPage = ({ id }) => {
    const [user, setUser] = useState();
    const [errors, setErrors] = useState({});
    const [professions, setProfessions] = useState([]);
    const [qualities, setQualities] = useState({});

    useEffect(() => {
        api.users.getById(id).then((data) => {
            data = {
                ...data,
                profession: data.profession._id,
                qualities: data.qualities.map((qualitie) => {
                    return { label: qualitie.name, value: qualitie._id };
                })
            };
            setUser(data);
        });
    }, []);
    const history = useHistory();

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data));
        api.qualities.fetchAll().then((data) => setQualities(data));
    }, []);

    useEffect(() => {
        validate();
    }, [user]);

    const handleChange = (target) => {
        setUser((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const professionName = Object.keys(professions).find(
            (key) => professions[key]._id === user.profession
        );
        const qualitiesList = user.qualities.map((q) =>
            Object.values(qualities).find(
                (qualitie) => q.value === qualitie._id
            )
        );
        const data = {
            ...user,
            profession: professions[professionName],
            qualities: qualitiesList
        };
        api.users.update(id, data);
        history.push("/users/" + id);
    };

    const validatorConfig = {
        name: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            }
        },
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        },
        password: {
            isRequired: { message: "Пароль обязателен для заполнения" },
            isCapitalSymbol: {
                message: "Пароль должен содержать хотя бы одну заглавную букву"
            },
            isContainDigit: {
                message: "Пароль должен содержать хотя бы одну цифру"
            },
            minLength: {
                message: "Пароль должен состоять минимум из 8 символов",
                value: 8
            }
        },
        profession: {
            isRequired: {
                message: "Обязательно укажите свою профессию"
            }
        }
    };

    const validate = () => {
        if (user) {
            const errors = validator(user, validatorConfig);
            setErrors(errors);
        }
        return Object.keys(errors).length === 0;
    };

    const isValid = Object.keys(errors).length === 0;

    if (user) {
        return (
            user && (
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 shadow p-4">
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    label="Name"
                                    name="name"
                                    value={user.name}
                                    onChange={handleChange}
                                    error={errors.name}
                                />

                                <TextField
                                    label="Email"
                                    name="email"
                                    value={user.email}
                                    onChange={handleChange}
                                    error={errors.email}
                                />
                                <SelectField
                                    label="Выберите вашу профессию"
                                    options={professions}
                                    defaultOption="Choose..."
                                    value={user.profession}
                                    name="profession"
                                    onChange={handleChange}
                                    error={errors.profession}
                                />
                                <RadioField
                                    options={[
                                        { name: "Male", value: "male" },
                                        { name: "Female", value: "female" },
                                        { name: "Other", value: "other" }
                                    ]}
                                    name="sex"
                                    value={user.sex}
                                    onChange={handleChange}
                                    label="Выберите ваш пол"
                                />
                                <MultiSelectField
                                    options={qualities}
                                    onChange={handleChange}
                                    name="qualities"
                                    defaultValue={user.qualities}
                                    label="Выберите ваши качества"
                                />
                                <button
                                    disabled={!isValid}
                                    className="btn btn-primary w-100 mx-auto"
                                >
                                    Обновить
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )
        );
    }

    return "Loading...";
};

UserEditPage.propTypes = {
    id: PropTypes.string.isRequired
};

export default UserEditPage;
