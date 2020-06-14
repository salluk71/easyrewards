import React from 'react';
import './App.css';
import Header from './components/Header'
import Bredcrumb from './components/Bredcrumb'
import AddTeam from './components/AddTeam'

function App() {
  return (
    <>
        <Header></Header>        
        <Bredcrumb></Bredcrumb>        
        <AddTeam></AddTeam>        
    </>
  );
}

export default App;
