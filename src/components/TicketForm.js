import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTicket } from '../redux/ticketsSlice';

const TicketForm = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    priority: 'Low',
    status: 'To Do',
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTicket(form));
    setForm({ title: '', description: '', priority: 'Low', status: 'To Do' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-sm">
      <h2 className="text-center mb-4">Ajouter un Ticket</h2>

      <div className="mb-3">
        <input
          type="text"
          placeholder="Titre"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <select
          value={form.priority}
          onChange={(e) => setForm({ ...form, priority: e.target.value })}
          className="form-control"
        >
          <option value="" disabled>Priorité</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <div className="mb-3">
        <button
          type="submit"
          className="btn btn-primary w-100"
        >
          Ajouter
        </button>
      </div>
    </form>
  );
};

export default TicketForm;
