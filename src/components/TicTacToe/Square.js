import React, { PureComponent } from 'react'
import Board from './Board'
import FlatButton from 'material-ui/FlatButton'

function Square(props) {
  return (
    <FlatButton className="square" onClick={props.onClick} label={props.value} />
  );
}

export default Square
