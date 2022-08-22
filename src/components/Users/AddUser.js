import React, { useState } from "react";
import Card from "../UI/Card";
import classes from './addUser.module.css';
import Button from "../UI/Button";
const AddUser = props => {

    const [userNameEntered, setUserName] = useState('');
    const [ageEntered, setAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();

        if (userNameEntered.trim().length === 0 || ageEntered.trim().length === 0) {
            return;
        }
        if (+ageEntered < 1) {
            return;
        }
        props.onAddUser(userNameEntered, ageEntered)
        setUserName('');
        setAge('');
    };

    const userNameChangeHandler = (event) => {
        setUserName(event.target.value);
    };

    const ageNameChangeHandler = (event) => {
        setAge(event.target.value);
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={userNameEntered} onChange={userNameChangeHandler} />
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" value={ageEntered} onChange={ageNameChangeHandler} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};



export default AddUser;