import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css'
import App from './App';

function AppLayout() {
  return (
    <div id='main'>
      <App/>
    </div>
  )
}

ReactDOM.render(<AppLayout/>,
  document.getElementById('root')
);
