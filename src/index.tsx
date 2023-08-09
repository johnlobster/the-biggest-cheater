import React from 'react';
import {createRoot} from 'react-dom/client';  // Note {} is required 
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import App from './App';
const rootDomNode = document.getElementById('root')
if ( rootDomNode !== null) {
  const root = createRoot(rootDomNode)
  if (root !== null) {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,

    );
  }

}


