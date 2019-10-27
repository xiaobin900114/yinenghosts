import React from 'react';
import "./HostDetail.css";
import arrow from "../../assets/img/back-arrow.png";
import linkedIn from "../../assets/img/linkedIn.png";
import email from "../../assets/img/email.png";

let active=false;
let backgroundClass = 'black_out';

class HostDetail extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let backgroundClass = this.props.active? "black_out" : "black_out black_out-close";
    let hostDetail = this.props.active? "HostDetail" : "HostDetail HostDetail-close";

    return(
      <div className={backgroundClass}>
        <div className={hostDetail}>
          <img src={arrow} onClick={this.props.onClose} />
          <div id="host_info">
            <img src={this.props.selectedHost.profile} />
            <div id="host_detail">
              <div>
                <h1>{this.props.selectedHost.name}</h1>
                <p>
                  {this.props.selectedHost.description}
                </p>
                <div id="contact_icons">
                  <img src={linkedIn}/>
                  <img src={email}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default HostDetail;
