import logo from './logo.svg';
import './App.css';
import Header from './header'
import React from './container/Text'
import { useState } from 'react';
function App() {
const[mode , setdark] = useState('light');
let value = "ON/OFF";
 const toggle =()=> {
if(mode === 'light')
{
  setdark('dark')
  document.body.style.backgroundColor = 'black';
  document.body.style.color = 'white';
  value = "Dark Mode ";
}
else 
{
  setdark('light')
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
  value = "dark mode";
}

 }

  return (
    <>
     <Header title="FossilCounts" mode={mode} toggle = {toggle} value = {value} />
<React/>

    </>
  );
}

export default App;
