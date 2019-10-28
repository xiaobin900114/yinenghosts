import React from 'react';
import "./AboutUs.css";
import redline from "../../assets/img/redline.png";
import idea from "../../assets/img/idea.png";
import spark from "../../assets/img/spark.png";
import core77 from "../../assets/img/core77.png";


class AboutUs extends React.Component {

  render(){
    return(
      <div id="about_us">
        <div id="description">
          <h1 id="title">About Us</h1>
          <img id="img" src={redline} alt=""/>
          <div id="content">
            <p>
              YinengFM is the first design media made to help Chinese creatives discover, explore, and spread the values of design through interviews with professionals, live exhibition, online community, and offline workshops.
            </p>
          </div>

        </div>
        <div id="prize">
          <img src={idea} className="prize_logo" alt=""/>
          <img src={spark} className="prize_logo" alt=""/>
          <img src={core77} className="prize_logo" alt=""/>
        </div>

      </div>
    );
  }
}

export default AboutUs;
