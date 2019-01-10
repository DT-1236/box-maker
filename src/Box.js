import React, { Component } from 'react';

class Box extends Component {
  render() {
    // const style = {
    //   backgroundColor: this.props.backgroundColor,
    //   width: this.props.width,
    //   height: this.props.height
    // };
    console.log("Rendering a single box", this.props.style)
    return <div className="Box" style={this.props.style} />;
  }
}

export default Box;
