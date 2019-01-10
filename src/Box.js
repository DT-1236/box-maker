import React, { Component } from 'react';

class Box extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
    console.log("We're in handle Remove", this.props.id);
    this.props.remove(this.props.id);
  }

  render() {
    return (
      <div>
        <div className="Box" style={this.props.style} />
        <button onClick={this.handleRemove}>x</button>
      </div>
    );
  }
}

export default Box;
