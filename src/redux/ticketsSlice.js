import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const initialState = {
  tickets: [
    {
      id: uuid(),
      title: 'Configurer le projet',
      description: 'Initialiser le projet React avec Redux Toolkit',
      priority: 'High',
      dueDate: '2024-12-10',
      status: 'To Do',
    },
    {
      id: uuid(),
      title: 'Créer les composants',
      description: 'Créer Board, Column, et TicketCard',
      priority: 'Medium',
      dueDate: '2024-12-12',
      status: 'In Progress',
    },
  ],
};

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    addTicket: (state, action) => {
      state.tickets.push({ id: uuid(), ...action.payload });
    },
    updateTicketStatus: (state, action) => {
      const { id, status } = action.payload;
      const ticket = state.tickets.find((t) => t.id === id);
      if (ticket) {
        ticket.status = status;
      }
    },
    deleteTicket: (state, action) => {
      state.tickets = state.tickets.filter((t) => t.id !== action.payload);
    },
  },
});

export const { addTicket, updateTicketStatus, deleteTicket } = ticketsSlice.actions;

// Selector to filter tickets by status
export const selectTicketsByStatus = (state, status) =>
  state.tickets.filter((ticket) => ticket.status === status);

export default ticketsSlice.reducer;
