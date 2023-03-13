import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import './index.css';
import DevActivity from './pages/Development/ActivityInfos';
import DevAverageSessions from './pages/Development/AverageSessionsInfos';
import DevPerformance from './pages/Development/PerformanceInfos';
import DevUser from './pages/Development/UserInfos';
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Router>
      <Routes>
        <Route path="/user/:id" element={<Home />} />
        <Route path="/dev/user/:id" element={<DevUser />} />
        <Route path="/dev/user/:id/average-sessions" element={<DevAverageSessions />} />
        <Route path="/dev/user/:id/activity" element={<DevActivity />} />
        <Route path="/dev/user/:id/performance" element={<DevPerformance />} />
        <Route path="*" element={<Navigate to="/user/12" />} />
      </Routes>
    </Router>
  </>
);
