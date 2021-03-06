import React, { Component } from 'react';
import '../App.css';

export default class LikeButton extends Component {
  //   let buttonStyle= {
  //       'background-color': ['purple','blue','green','yellow','orange','red']
  //   }
  state = {
    clickCount: 0,
    backgroundColor: ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
  };
  handleClick = () => {
    console.log('click');
    // this.setState({ clickCount: this.state.clickCount + 1 });
    //we use this because of the asynchronus updating!:
    this.setState((state) => ({
      clickCount: state.clickCount + 1,
    }));
  };
  render() {
    return (
      <button
        onClick={this.handleClick}
        style={{
          backgroundColor: this.state.backgroundColor[
            this.state.clickCount % 6
          ],
        }}
      >
        {this.state.clickCount} Likes
      </button>
    );
  }
}
