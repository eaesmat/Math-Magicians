import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Calculator from './Components/Calculator';
import HomPage from './Pages/HomePage';
import QuotePage from './Pages/QuotePage';

const App = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/" element={<HomPage />} />
      <Route path="/quote" element={<QuotePage />} />
    </Routes>
  </>
);

export default App;
