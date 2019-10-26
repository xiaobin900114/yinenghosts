import React from 'react';

class Host extends React.Component {

  render(){
    return(
      <img src='{this.props.host}' />
    )
  }
}

export default Host;
