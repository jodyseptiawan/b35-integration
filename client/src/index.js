import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContextProvider } from './context/userContext';

// Init QueryClient and QueryClientProvider here ...
import { QueryClient, QueryClientProvider } from 'react-query';

// favicon
import Favicon from './assets/DumbMerch.png';
const favicon = document.getElementById('idFavicon');
favicon.setAttribute('href', Favicon);

// Init Client from QueryClient() here ...
const client = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
     <QueryClientProvider client={client}>
      <Router>
        <App />
      </Router>
      </QueryClientProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
