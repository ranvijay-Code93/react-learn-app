import React from 'react';
import './App.css';
import Test from './Test';
import TestNew from './TestNew';
import ParentComponet from './Components/ParentComponent';
import PrevTest from './PrevTest';
import PrevPropsTest from './PrevPropsTest';
import TestBootstrap from './TestBootstrap';
import ControlledComp from './ControlledComp';

function App() {
  return (
    <div className="App">
          <div>Learn React</div>
      <Test/>
      <TestNew/>
      <ParentComponet/>
      <PrevTest/>
      <PrevPropsTest/>
      <TestBootstrap/>
      <ControlledComp/>
    </div>
    
  );
}

export default App;
