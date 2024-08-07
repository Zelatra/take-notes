import './App.css';
import React from 'react';
import Notes from './notes';
import Note from './note';


function App() {
  return (
    <main>
    <div>
      <header className="banner">
        <h1 className="title">Notes</h1>
      </header>
      <body>
        <Notes />
      </body>
    </div>
    </main>
  );
}

export default App;
