import React from 'react';
import ReactDOM from 'react-dom';
import { FriendListProvider } from "./contexts/friend-list/friend-list";

import './index.css';
import { BrowserRouter } from "react-router-dom";
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <FriendListProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FriendListProvider>
  </React.StrictMode>,
  document.getElementById('root')
);