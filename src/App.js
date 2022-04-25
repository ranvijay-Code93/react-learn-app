import React from 'react';
import './App.css';
import Test from './Test';
import TestNew from './TestNew';
import ParentComponet from './Components/ParentComponent';
import PrevTest from './PrevTest';
import PrevPropsTest from './PrevPropsTest';
import TestBootstrap from './TestBootstrap';
import ControlledComp from './ControlledComp';
import Nav from "./Nav";
import { Routes, Route } from 'react-router-dom';
import NoPageFound from './NoPageFound';
import TestFormFields from './TestFormFields';
import FormValidationNoLib from './FormValidationNoLib';

function App() {
  return (
    <div className="App">
        <Nav />
        <Routes>
          <Route path='/learnRef' element={<TestNew />}></Route>
          <Route path='/learnContext' element={<ParentComponet />}></Route>
          <Route path='/learnPrevState' element={<PrevTest />}></Route>
          <Route path='/learnPrevProps' element={<PrevPropsTest />}></Route>
          <Route path='/learnArrayRendering' element={<TestBootstrap />}></Route>
          <Route path='/learnControlledComponent' element={<ControlledComp />}></Route>
          <Route path='/testFormFields' element={<TestFormFields />}></Route>
          <Route path='/formValidationNoLib' element={<FormValidationNoLib />}></Route>
          <Route exact path='/' element={<Test />}></Route>
          <Route path="*" element={<NoPageFound />}></Route>
        </Routes>
    </div>
  )
}
export default App;
