import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Board from './components/Board';
import TicketForm from './components/TicketForm';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Gestion des Tickets</h1>
        <TicketForm />
        <Board />
      </div>
    </Provider>
  );
}

export default App;
