import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import './BoxList.css';
import uuid from 'uuid/v4';

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.makeNewBox = this.makeNewBox.bind(this);
    this.removeBox = this.removeBox.bind(this);
  }

  makeNewBox({ backgroundColor, height, width }) {
    const currentBoxList = { ...this.state };
    this.setState({
      ...currentBoxList,
      [uuid()]: {
        backgroundColor,
        height: height + 'px',
        width: width + 'px'
      }
    });
  }

  removeBox(uuid) {
    const boxList = { ...this.state };
    console.log('The boxes', boxList);
    delete boxList[uuid];
    console.log('The new boxList', boxList);
    this.setState(boxList);
  }

  renderBoxes() {
    const boxes = [];
    console.log(this.state);
    for (let uuid in this.state) {
      boxes.push(
        <Box
          key={uuid}
          id={uuid}
          style={this.state[uuid]}
          remove={this.removeBox}
        />
      );
    }
    return boxes;
  }

  render() {
    console.log('Rendering BoxList', this.state);
    return (
      <div className="BoxList">
        <NewBoxForm submit={this.makeNewBox} />
        {this.renderBoxes()}
      </div>
    );
  }
}

export default BoxList;
