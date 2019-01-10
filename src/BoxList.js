import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import './BoxList.css';
import uuid from 'uuid/v4';

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = { boxes: [] };
    this.makeNewBox = this.makeNewBox.bind(this);
  }

  makeNewBox({ backgroundColor, height, width }) {
    this.setState({
      boxes: this.state.boxes.concat({
        backgroundColor,
        height: height + 'px',
        width: width + 'px'
      })
    });
  }

  removeBox() {}

  renderBoxes() {
    console.log('We are rendering boxes', this.state.boxes);
    return this.state.boxes.map(item => {
      console.log("We're in the map");
      return <Box style={item} />;
    });
  }

  render() {
    return (
      <div className="BoxList">
        <NewBoxForm submit={this.makeNewBox} />
        {this.renderBoxes()}
      </div>
    );
  }
}

export default BoxList;
