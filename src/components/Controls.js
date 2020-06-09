import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moveLeft, moveUp, reset} from './../actions';
import styles from './styles.module.scss';

class Controls extends Component {
  
  render() {
    return (<div className={styles.controls}>
      <a href="#" onClick={()=>this.props.moveLeft('row1', this.props.position, this.props.history, 'Row 1 left')}>Move left row 1</a>
      <a href="#" onClick={() => this.props.moveLeft('row2', this.props.position, this.props.history, 'Row 2 left')}>Move left row 2</a>
      <a href="#" onClick={() => this.props.moveLeft('row3', this.props.position, this.props.history, 'Row 3 left')}>Move left row 3</a>
    <a href="#" onClick={() => this.props.moveUp('col1', this.props.position, this.props.history, 'Col 1 up')}>Move Up col 1</a>
      <a href="#" onClick={() => this.props.moveUp('col2', this.props.position, this.props.history, 'Col 2 up')}>Move Up col 2</a>
      <a href="#" onClick={() => this.props.moveUp('col3', this.props.position, this.props.history, 'Col 3 up')}>Move Up col 3</a>
      <a href="#" onClick={() => this.props.reset()}>Reset</a>
    </div>)
  }
}

const mapStateToProps = state => {
  const { position, history } = state;
  return {
    position,
    history
  };
};

const mapDispatchToProps = dispatch => {
  return {
    moveLeft: (row, position, history, movement) => dispatch(moveLeft(row, position, history, movement)),
    moveUp: (row, position, history, movement) => dispatch(moveUp(row, position, history, movement)),
    reset: () => dispatch(reset())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Controls);
