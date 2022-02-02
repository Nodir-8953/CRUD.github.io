import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App counter={10}/>
  </React.StrictMode>,
  document.getElementById('root')
);
