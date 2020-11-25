import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import ContactsTable from './components/ContactsTable';

function App() {
  return (
    <div className="App">
      <ContactsTable />
    </div>
  );
}

export default App;
