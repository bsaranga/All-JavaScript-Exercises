import React from 'react'
import MainRouter from './MainRouter'
import {HashRouter} from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <MainRouter/>
    </HashRouter>
  );
}

export default App;