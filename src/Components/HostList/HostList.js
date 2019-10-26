import React from 'react';
import "./HostList.css";
//import Offshoot from "../Offshoot";
import profile from "../../assets/img/bin.png";
import Host from "../Host/Host"

const moon = 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/background_search_desktop.jpg';

class HostList extends React.Component {
  constructor(props){
    super(props);
    this.state=[
      moon
    ];
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
            this.props.hosts.map(host => {
              return <Host host={host}/>
            })
          }
        </div>
      </div>
    );
  }
}

export default HostList;
