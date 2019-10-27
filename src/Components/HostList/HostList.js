import React from 'react';
import "./HostList.css";
//import Offshoot from "../Offshoot";
import Host from "../Host/Host"


class HostList extends React.Component {
  constructor(props){
    super(props);
    this.state=[];
  }


  render() {
    return(
      <div id="hostlist">
        <h1>Hosts</h1>
        <ul id="offices">
          <li>Los Angeles</li>
          <li>Shanghai</li>
          <li>Tokyo</li>
        </ul>
        <div id="img_container">
          {
            Object.keys(this.props.hosts).map(key => {
              let profile = this.props.hosts[key].profile;
              return <Host host={profile}/>
            })
          }
        </div>
      </div>
    );
  }
}

export default HostList;
