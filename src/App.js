import React from 'react';
import Panel from './components/Panel';
import styles from './styles.module.scss';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        Rubik Cube
      </header>
      <div className={styles.cubeContainer}><Panel></Panel></div>
    </div>
  );
}

export default App;
