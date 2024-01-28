import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import ErrorBoundary from "./component/ErrorBoundary";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);

