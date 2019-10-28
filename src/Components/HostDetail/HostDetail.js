import React from 'react';
import "./HostDetail.css";
import arrow from "../../assets/img/back-arrow.png";
import linkedIn from "../../assets/img/linkedIn.png";
import email from "../../assets/img/email.png";

class HostDetail extends React.Component {
  render(){
    let backgroundClass = this.props.active? "black_out" : "black_out black_out-close";
    let hostDetail = this.props.active? "HostDetail" : "HostDetail HostDetail-close";

    return(
      <div className={backgroundClass}>
        <div className={hostDetail}>
          <img src={arrow} onClick={this.props.onClose} alt=""/>
          <div id="host_info">
            <img src={this.props.selectedHost.profile} alt=""/>
            <div id="host_detail">
              <div>
                <h1>{this.props.selectedHost.name}</h1>
                <p>
                  {this.props.selectedHost.description}
                </p>
                <div id="contact_icons">
                  <a href={this.props.selectedHost.linkedIn} target='blank'><img src={linkedIn} alt="linkedIn"/></a>
                  <a href={"mailto:" + this.props.selectedHost.email}><img src={email} alt="linkedIn"/></a>
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
