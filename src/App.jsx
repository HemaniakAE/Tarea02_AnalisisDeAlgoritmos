import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Container from './components/Container.jsx'

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
