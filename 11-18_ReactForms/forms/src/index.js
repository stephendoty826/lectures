import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AboutUs from './components/AboutUs'
import FAQ from './components/FAQ'
import BaseLayout from './components/layout/BaseLayout'
import Forms from './components/Forms'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/faq/:faqID" element={<FAQ />} />
          <Route path="/forms" element={<Forms />} />
        </Routes>
      </BaseLayout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

