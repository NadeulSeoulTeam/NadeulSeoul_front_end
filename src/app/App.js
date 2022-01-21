import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalFonts from '../fonts/fonts';
import Home from '../features/test_todo/Home';
import Detail from '../features/test_todo/Detail';
import MainPage from '../features/Main/MainPage';

function App() {
  return (
    <BrowserRouter>
      <GlobalFonts />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route Route path="/:id" element={<Detail />} />
        <Route Route path="/main" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
