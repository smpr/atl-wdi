import React from 'react';

const Credit = (props) => {
    return (
    <div>
      
        <table>
        <tr>
            <td>{props.description}</td>
            <td>{props.amount}</td>
            <td>{props.date}</td>
        </tr>
        </table>
        </div>
    );
};

export default Credit;