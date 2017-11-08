import React, { PureComponent } from 'react'

class Square extends PureComponent {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}

export default Square
