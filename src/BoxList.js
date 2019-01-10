import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import './BoxList.css';
import uuid from 'uuid/v4';

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = { boxes: {} };
    this.makeNewBox = this.makeNewBox.bind(this);
    this.removeBox = this.removeBox.bind(this);
  }

  makeNewBox({ backgroundColor, height, width }) {
    const currentBoxList = { ...this.state.boxes };
    this.setState({
      boxes: {
        ...currentBoxList,
        [uuid()]: {
          backgroundColor,
          height: height + 'px',
          width: width + 'px'
        }
      }
    });
  }

  removeBox(uuid) {
    const boxList = { ...this.state.boxes };
    delete boxList[uuid];
    this.setState({ boxes: boxList });
  }

  renderBoxes() {
    const boxes = [];
    for (let uuid in this.state.boxes) {
      boxes.push(
        <Box
          key={uuid}
          id={uuid}
          style={this.state.boxes[uuid]}
          remove={this.removeBox}
        />
      );
    }
    return boxes;
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
