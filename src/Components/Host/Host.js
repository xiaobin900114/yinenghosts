import React from 'react';
import './Host.css';

class Host extends React.Component {

  render(){
    return(
      <img src={this.props.host} id="host"/>
    )
  }
}

export default Host;
