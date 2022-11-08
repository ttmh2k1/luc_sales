import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './reset.css'; 
import { ContextProvider } from "./hooks/ContextProvider";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);

