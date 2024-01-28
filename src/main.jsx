import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ErrorBoundary from './component/ErrorBoundary'; 
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap the App component with the ErrorBoundary */}
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
