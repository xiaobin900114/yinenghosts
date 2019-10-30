import React from 'react';
import "./HostList.css";
//import Offshoot from "../Offshoot";
import Host from "../Host/Host";

const officeList = [
  "Los Angeles",
  "Shanghai",
  "Tokyo"
]

class HostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      officeSelected: '',
    })
    this.handleOfficeChange = this.handleOfficeChange.bind(this)
  }

  handleOfficeChange(office) {
    this.props.onOfficeChange(office);
  }

  render() {
    return(
      <div id="hostlist">
        <h1>Hosts</h1>
        <ul id="offices">
          {
            officeList.map((office,index) => {
              return <li key={index} onClick={() => this.handleOfficeChange(office)} className="office_name">{office}</li>
            })
          }
        </ul>
        <div id="img_container">
          {
            Object.keys(this.props.office.hosts).map(key => {
              let hostInfo = this.props.office.hosts[key];
              return <Host key={hostInfo.id} host={hostInfo} handleDetails={this.props.handleDetails}/>
            })
          }
        </div>
      </div>
    );
  }
}

export default HostList;
