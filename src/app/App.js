import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../features/test_todo/Home';
import Detail from '../features/test_todo/Detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route Route path="/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
