import './App.css';
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import ScreenUi from './yash_ui_task/Screen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/yash" element={<ScreenUi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
