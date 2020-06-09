import React from 'react';
import { renderFaces } from './../models';
import styles from './styles.module.scss';

console.log(renderFaces(), 'FACES')
function App() {
  return renderFaces().map(face => {
    return face.map(square => (<div style={{ backgroundColor: square }} className={styles.cube} ></div>))
  });
}

export default App;
