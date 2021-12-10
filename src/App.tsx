import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Counter from './features/counter/Counter';
import Pokemons from './features/pokemon/Pokemons';

export default function App() {
  return (
    <Router>
      <main className="grid place-items-center max-w-5xl h-screen mx-auto px-2 sm:px-4 lg:px-0">
        <Routes>
          <Route path="/" element={<Pokemons />} />
          <Route path="counter/*" element={<Counter />} />
        </Routes>
      </main>
    </Router>
  );
}
