import React from 'react';
import './App.css';

import Form from '../src/pages/Form';
import SubLogo from './components/SubLogo';
import Travel from './components/Travel';

function App() {
  return (
    <div className="box">
      <div className="">
        <SubLogo />

        <Form />
      </div>
      <Travel />
    </div>
  );
}

export default App;
