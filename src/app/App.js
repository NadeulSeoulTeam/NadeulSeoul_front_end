import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// style
import GlobalFonts from '../fonts/fonts';
import Container from './AppStyle';

// router
import Home from '../features/test_todo/Home';
import Detail from '../features/test_todo/Detail';
import MainPage from '../features/Main/MainPage';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <GlobalFonts />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route Route path="/:id" element={<Detail />} />
          <Route Route path="/main" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
