import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTicket, updateTicketStatus } from '../redux/ticketsSlice';

const TicketCard = ({ ticket }) => {
  const dispatch = useDispatch();
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleStatusChange = (e) => {
    dispatch(updateTicketStatus({ id: ticket.id, status: e.target.value }));
  };

  const handleDeleteClick = () => {
    if (confirmDelete) {
      dispatch(deleteTicket(ticket.id));
    } else {
      setConfirmDelete(true);
    }
  };

  const statusColor = {
    'To Do': 'bg-warning',  // Jaune pour "To Do"
    'In Progress': 'bg-danger',  // Rouge pour "In Progress"
    'Done': 'bg-success'  // Vert pour "Done"
  };

  return (
    <div className="card shadow-lg mb-4  " style={{ borderRadius: '10px', border: '2px solid #ccc' }}>
      <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center" style={{ borderBottom: '2px solid #ccc' }}>
        <h5 className="mb-0">{ticket.title}</h5>
        <span className={`badge ${statusColor[ticket.status]}`}>
          {ticket.priority}
        </span>
      </div>
      <div className="card-body " style={{ borderTop: '2px solid #ccc' }}>
        <p>{ticket.description || 'Pas de description disponible'}</p>
        <p className="text-muted">Échéance : <strong>{ticket.dueDate || 'Pas de date définie'}</strong></p>

        <div className="mb-3 " style={{ borderBottom: '1px solid #ccc' }}>
          <label htmlFor="status" className="form-label">Statut :</label>
          <select
            id="status"
            className="form-select"
            value={ticket.status}
            onChange={handleStatusChange}
          >
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>

        <button
          onClick={handleDeleteClick}
          className={`btn ${confirmDelete ? 'btn-danger' : 'btn-outline-warning'}`}
          style={{ width: '100%' }}
        >
          {confirmDelete ? 'Confirmer' : 'Supprimer'}
        </button>

        {confirmDelete && (
          <p className="mt-2 text-center text-warning">
            Êtes-vous sûr ? Cliquez à nouveau pour confirmer.
          </p>
        )}
      </div>
    </div>
  );
};

export default TicketCard;
