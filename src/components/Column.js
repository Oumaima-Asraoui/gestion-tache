import React from 'react';
import TicketCard from './TicketCard';

const Column = ({  tickets }) => {
  return (
    <div className="bg-light p-3 rounded shadow-sm" style={{ width: '300px' }}>
     
      <div>
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default Column;
