import React from 'react';
import './App.css';
import Test from './Test';
import TestNew from './TestNew';
import ParentComponet from './Components/ParentComponent';

function App() {
  return (
    <div className="App">
          <div>Learn React</div>
      <Test/>
      <TestNew/>
      <ParentComponet/>
    </div>
    
  );
}

export default App;
