import React, { Component } from 'react';

import './MessageBox.css';

class MessageBox extends Component {
  render() {
    return (
      <div className={this.props.alert ? 'MessageBox alert' : 'MessageBox'}>
        {this.props.msg}
      </div>
    );
  }
}

export default MessageBox;
