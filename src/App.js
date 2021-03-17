
import React from 'react';
import { Dashboard } from './ui/Dashboard';
import { Head } from './ui/Head';
import { Objetos } from './ui/Objetos';
// import MergeDoc from './components/MergeDoc';

function App() {
  return (
    <div className="grid-contenedor">
      <Objetos />
      <div className="grid-derecha">
        <Head />
        <Dashboard />
      </div>

    </div>

  );
};

export default App;
