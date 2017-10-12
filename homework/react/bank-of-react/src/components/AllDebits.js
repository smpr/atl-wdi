import React from 'react';

import Debit from './Debit';

const AllDebits = (props) => {

  const debitList = props.debits.map((debit, index) => {
    return <Debit
        description={debit.description}
        amount={debit.amount}
        date={debit.date}
        key={index}/>;
  });

  return (
      <div>
        {debitList}
      </div>
  );
};

export default AllDebits;