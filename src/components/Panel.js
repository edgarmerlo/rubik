import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.scss';


class Panel extends Component {
  render() {
    return this.props.position.map(face => {
      return face.map(square => (<div style={{ backgroundColor: square }} className={styles.cube} ></div>))
    });
  }
}

const mapStateToProps = state => {
  const { position } = state;
  return {
    position
  };
};

export default connect(mapStateToProps)(Panel);
