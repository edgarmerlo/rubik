import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.scss';

class History extends Component {

  render() {
    return (<div className={styles.history}>
      <h2>History</h2>
      { this.props.history.map(move => <div>{ move }</div>)}
    </div>)
  }
}

const mapStateToProps = state => {
  const { history } = state;
  return {
    history
  };
};

export default connect(mapStateToProps)(History);
