import React from 'react';
import './Host.css';

class Host extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.callDetail = this.callDetail.bind(this);
  }

  callDetail() {
    this.props.handleDetails(this.props.host);
  }

  render(){
    return(
      <img src={this.props.host.profile} onClick={this.callDetail} id="host"/>
    )
  }
}

export default Host;
