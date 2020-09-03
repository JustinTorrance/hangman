import React from 'react';
import Header from './components/Header'
import Figure from './components/Figure'
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Popup from './components/Popup';
import Notification from './components/Notification';


import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className='game-container'>
        <Figure />
        <WrongLetters />
        <Word />
        <Popup />
        <Notification />
      </div>
    </>
  );
}

export default App;
