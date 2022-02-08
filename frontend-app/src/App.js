import './App.css';
import React from 'react';
import 'antd/dist/antd.css';
import ScreenUi from './yash_ui_task/Screen';
import NikhilScreenUi from './nikhil_ui_task/Screen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/yash" element={<ScreenUi />} />
      </Routes>
      <Routes>
          <Route path="/nikhil" element={<NikhilScreenUi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
