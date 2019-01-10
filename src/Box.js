import React, { Component } from 'react';

class Box extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
    this.props.remove(this.props.id);
  }

  render() {
    return (
      <div>
        <div className="Box" style={this.props.style} />
        <button className="delete-button" onClick={this.handleRemove}>
          x
        </button>
      </div>
    );
  }
}

export default Box;
