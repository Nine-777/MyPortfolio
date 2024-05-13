import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Header from './components/layout/Header';

reportWebVitals();

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<Header />);
}
