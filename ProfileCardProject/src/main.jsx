import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
// import App from './App.jsx';
import { UserCard } from "./UserCard";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     {/* <App />  */}
     <UserCard /> 
  </React.StrictMode>
);
