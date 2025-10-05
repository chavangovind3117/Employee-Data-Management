import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { EmployeeProvider } from './context/EmployeeContext'; // Import the provider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EmployeeProvider> {/* Wrap App with the provider */}
      <App />
    </EmployeeProvider>
  </React.StrictMode>
);

reportWebVitals();
