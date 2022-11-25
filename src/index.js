import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './reset.css';
import 'react-toastify/dist/ReactToastify.css';

import { ContextProvider } from "./hooks/ContextProvider";
import { ToastContainer } from 'react-toastify';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <App />
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  </ContextProvider>
);