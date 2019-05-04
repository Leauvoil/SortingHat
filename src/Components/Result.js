import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from '../Containers/Message';

const action = {
  type: 'UPDATE_CHOICE_WITH_MY_INDEX',
  indexSelected: Math.floor(Math.random() * 4)
};

class Result extends Component {
  
   componentWillMount() {
    setInterval(() => this.props.dispatch(action), 1000);
   }
   
  
  render() {
    console.log(this.props);
    return (
      <div >
       
          {this.props.houses.map(house => (
            <div style={{display:'flex', justifyContent:'space-evenly',  flexDirection: 'row', flexWrap:'wrap',}}key={house}>{house}</div>
          ))}
      
        <Message message={this.props.selectedHouses} />
      </div>
    );
  }
}

export default connect(store => store)(Result);