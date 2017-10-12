import React from 'react';

import Credit from './Credit';

const AllCredits = (props) => {

  const creditList = props.credits.map((credit, index) => {
    return <Credit
        description={credit.description}
        amount={credit.amount}
        date={credit.date}
        key={index}/>;
  });
//{creditList}
  return (
      <div>
        {creditList}
      </div>
  );
};

export default AllCredits;