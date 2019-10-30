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
          <a href=""><img src={idea} className="prize_logo" alt=""/></a>
          <a href="https://galleries.sparkawards.com/index.cfm?entry=954B2432-AE4F-46AD-9456B5994EF4F81A" target="_blank"><img src={spark} className="prize_logo" alt=""/></a>
          <a href="https://designawards.core77.com/strategy-research/62405/yinengfm" target="_blank"><img src={core77} className="prize_logo" alt=""/></a>
        </div>

      </div>
    );
  }
}

export default AboutUs;
