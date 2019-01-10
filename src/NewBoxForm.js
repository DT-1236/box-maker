import React, { Component } from 'react';
import './NewBoxForm.css';

class NewFormBox extends Component {
  constructor(props) {
    super(props);
    this.state = { height: 10, width: 10, backgroundColor: '#000000' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submit(this.state);
    this.setState({ height: 10, width: 10, backgroundColor: '#000000' });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const color = { backgroundColor: this.state.backgroundColor };
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="backgroundColor">Color</label>
          <input
            type="text"
            name="backgroundColor"
            value={this.state.backgroundColor}
            onChange={this.handleChange}
          />
          <div className="sample" style={color} />
        </div>
        <div>
          <label htmlFor="width">Width (px)</label>
          <input
            type="text"
            name="width"
            value={this.state.width}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label htmlFor="height">Height (px)</label>
          <input
            type="text"
            name="height"
            value={this.state.height}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">Make a box!</button>
      </form>
    );
  }
}

export default NewFormBox;
