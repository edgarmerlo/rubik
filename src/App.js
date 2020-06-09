import React from 'react';
import Panel from './components/Panel';
import Controls from './components/Controls';
import History from './components/History';
import styles from './styles.module.scss';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        Rubik Cube
      </header>
      <div className={styles.cubeContainer}><Panel></Panel></div>
      <div><Controls></Controls></div>
      <div><History></History></div>
    </div>
  );
}

export default App;
