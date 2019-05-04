
import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <div >
        <p style={{marginLeft : 'auto', marginRight: 'auto' , textAlign: 'center', fontSize: '20vh'}} >{this.props.message}</p>
      </div>
    );
  }
}

export default Message;