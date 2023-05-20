import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<App />} />
          <Route path="compare-bar" element={<App />} />
          <Route path="stacked-bar" element={<App />} />
          <Route path="pie" element={<App />} />
          <Route path="donut" element={<App />} />
          <Route path="line" element={<App />} />
          <Route path="spline" element={<App />} />
          <Route path="scatter" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);