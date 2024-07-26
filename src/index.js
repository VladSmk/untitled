import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {PageProvider} from "./context/PageContext";
import {DataProvider} from "./context/DataContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <PageProvider>
          <DataProvider>
              <App />
          </DataProvider>
      </PageProvider>
  </React.StrictMode>
);
