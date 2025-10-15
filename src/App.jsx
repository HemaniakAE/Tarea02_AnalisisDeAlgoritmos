import { useState } from 'react'
import './App.css'
import Header from './Components/Header.jsx'
import Container from './Components/Container.jsx'

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='card'>
        <Container />
      </div>
    </div>
    
  );
}

export default App
