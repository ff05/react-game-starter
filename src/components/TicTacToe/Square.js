import React, { PureComponent } from 'react'
import Board from './Board'
import FlatButton from 'material-ui/FlatButton'
import './Square.css'

function Square(props) {
  return (

    <FlatButton className="square" onClick={props.onClick} label=" " >
      <span>{props.value}</span>
    </FlatButton>
  );
}

export default Square
