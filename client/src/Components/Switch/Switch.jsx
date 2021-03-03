import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import Message from "../Message/Message";

const Switch = (props) => {


    if (props.user?.sightings?.length !== 0) {
        return (
            <Dashboard user={props.user} handleDeleteClick={props.handleDeleteClick} />
        )   
    } else {
    return (

        <Message />

    );
};
};

export default Switch;