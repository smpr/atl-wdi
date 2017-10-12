import React from 'react';

const Debit = (props) => {
    return (
        <div>
            <div>Description: {props.description}</div>
            <div>Anount: {props.amount}</div>
            <div>Date: {props.date}</div>
        </div>
    );
};

export default Debit;