import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary"; // Update the path
import './index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
