import React from 'react';
import { useSelector } from 'react-redux';
import Column from './Column';

const Board = () => {
  const tickets = useSelector((state) => state.tickets.tickets);

  const columns = ['To Do', 'In Progress', 'Done'];
  
  // Définir les couleurs pour chaque statut
  const statusColors = {
    'To Do': 'bg-warning',       // Rouge pour "To Do"
    'In Progress': 'bg-danger', // Jaune pour "In Progress"
    'Done': 'bg-success',        // Vert pour "Done"
  };

  return (
    <div className="container my-5">
      <div className="row g-4">
        {columns.map((col) => (
          <div key={col} className="col-lg-4 col-md-6" style={{ border: '2px solid #ccc', borderRadius: '10px' }}>
            <div className="card shadow-sm rounded" style={{ border: '2px solid #ccc', borderRadius: '10px' }}>
              <div className={`card-header text-center text-white ${statusColors[col]}`} style={{ borderBottom: '2px solid #ccc' }}>
                <h5>{col}</h5>
              </div>
              <div className="card-body p-3">
                <Column
                  title={col}
                  tickets={tickets.filter((ticket) => ticket.status === col)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
