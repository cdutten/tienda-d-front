import React from 'react';
import './App.css';
import LoginPaper from './components/SingIn/SingIn.js';
import Header from './components/Header/Header.js';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <LoginPaper></LoginPaper>
    </div>
  );
}

export default App;
