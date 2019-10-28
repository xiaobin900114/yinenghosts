import React from 'react';
import './App.css';
import TitlePage from './Components/TitlePage/TitlePage';
import AboutUs from './Components/AboutUs/AboutUs';
import HostList from './Components/HostList/HostList';
import HostDetail from './Components/HostDetail/HostDetail';

const laOffice = {
  bin:{
    id: 1,
    profile: 'https://lh3.googleusercontent.com/WRyrOXROD5iRUS_eB2HAuOFR1xAsxy-da0-hhsk4RIP1YrqggYkfMS4uIrCU7b0kqjbr76EIEFIjJt_61iHlb5dZ0C7-M8Zgj-KQYva5DJrUghpm3m5CxfkAXJajbfrMht9wVBJDpQ=s305-p-k',
    name: "bin",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    linkedIn:'https://www.linkedin.com/in/xiaobinli/',
    email:'xiaobin2@andrew.cmu.edu',
  },
  sai:{
    id: 2,
    profile: 'https://lh3.googleusercontent.com/nrZJJoTt6ETrCYWLuoU9JTv2yaNIXxKLLh25ffV0XIuMREx2MDcnwCLB9pcMvGvuDOpRvAIUzvTogFGybtWCAZblZDL-peC_4ealZeHFQEY40-bURYHF_Cv4G4gcJewDD7KbJAjg9g=s305-p-k',
    name: "sai",
    description: "My name is Sai Jiao, graduate from art center colloge of design at 2015. After art center I’m smoothly get into the theme park industry, I played an important role responsible to deliver designs and drawings that exceeded client expectations in most of Thinkwell's projects. As an integral part of the company, I had the pleasure to collaborate and Art Director with several talented individuals varying in skills and disciplines. #Project list:#Ain Dubai, Kingdom Animalia adventure park Oman, DRIV golf lounge and brewhouse, Dubai Mall ice rink and adventure park, Lionsgate theme park China, Evergrande Group theme park China, Warner Bros theme park Abu Dhabi , HBO, Nickelodeon in amusement parks, Snow park Abu Dhabi, Universal Orlando (Lord of the rings) , Universal London (Harry potter), Universal Monsters, Nixon museum, Oval office, Warner Bros Tour center.#At July 2019 I created KICKSNEAKER, We provide perfect sneaker care services for sneaker head.",
    linkedIn:'https://www.linkedin.com/in/sai-jiao-09053bb1/',
    email:'info@yineng.fm',
  },
  moon:{
    id: 3,
    profile: 'https://lh3.googleusercontent.com/PgtzzVoNATQoASPzAQgLhOZf-6ad1_Y7Oi7tZ9TRaxQ_pZe7b9IEkhBPeohK0brw7fmpHKdT623oSNtqHOJmGdhO6XfI4hfYZdwcLJRY_z10BXVLGSNVxSmiK1wE7mKOtm7tMxX0qw=s305-p-k',
    name: "moon",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    linkedIn:'https://www.linkedin.com/in/moonqi/',
    email:'info@yineng.fm',
  },
  oba:{
    id: 4,
    profile: 'https://lh3.googleusercontent.com/rCLQ-6pidgE1Z9wVXK9WiP3n0QyKcWsaBKzY60uAHX9S1N14OR7NVsMKW4KNDOcp2hGKrz0Moe6RXwxuSb-aOLhiXBdz1qsblWQ8TLBbd2NvteYptZC1H8_HR8wSG7Iz62ZTznlyhA=s305-p-k',
    name: "oba",
    description: "My name is Xiao Zhang, an automotive designer with years of experience both in China and United States. Throughout my professional career, I am lucky enough to have precious opportunities working in Fortune Global 500 companies such as Ford, BMW and Nissan, which gave me first-hand chances to observe world-class design activities everyday. In addition, I had the chance to work in Faraday Future, an electric vehicle start-up in Los Angeles, which allows me to experience a much faster work flow and operation dynamic.#As a designer, I am always self-motived and working hard to improve my design skills in the professional working environment during the past few years. And now I believe it is time to start thinking about design in a more strategic way. Therefore, I started taking MBA classes and I believe proper business thinking, understanding of the market and valuable knowledge of management can definitely be helpful for a long-term career development.",
    linkedIn:'https://www.linkedin.com/in/xiao-zhang-644473a1/',
    email:'info@yineng.fm',
  },
  jean:{
    id: 5,
    profile: 'https://lh3.googleusercontent.com/VGQ_g8_C5Z1hhTiesiPhGPtaOVMLfIssVpLEX-CAFYuLx-AjD1MnvdRXYyjWEukuA2GwWcDqTI6Puc9yC_Ck0m4gMdQG8wydBbRMhWMYmai5f-TfbhsMI_lmulWDX_xM7tp-njbdCQ=s305-p-k',
    name: "jean",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    linkedIn:'https://www.linkedin.com/in/jeanxhe/',
    email:'info@yineng.fm',
  },
  chang:{
    id: 6,
    profile: 'https://lh3.googleusercontent.com/_2IdftYyAdUmf1qjVjifFTeCWguD0EgqpXureu0pUUHu5pfiD5MFQRrUL9WZDlm8NOmgo6K4sVScP3Z19HA3cc35IhT6xj2sSckO9lcNQejSGvbYozeUlPtci_4BGZOya3x_NJeKVg=s305-p-k',
    name: "chang",
    description: "As an industrial designer with transportation design background, my goal is always to create design with clarity and simplicity on both functionality and aesthetics. Through the experience at both OEM and tech companies, I’ve gained a comprehensive understanding of autonomy, technology and how they are going to impact on the future of transportation. My developed skillset allows me to effectively apply all the knowledge into the whole design process from concept development to 2D/3D visualization.",
    linkedIn:'https://www.linkedin.com/in/zhaokun-wang-940a49ab/',
    email:'info@yineng.fm',
  },
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      office: laOffice,
      selectedHost: {},
      detailPageActive: false
    } ;
    this.handleDetails = this.handleDetails.bind(this);
    this.deactiveDetailPage = this.deactiveDetailPage.bind(this);
  }

  handleDetails(host) {
    this.setState({
      selectedHost: host,
      detailPageActive: true
    })
  }

  deactiveDetailPage() {
    this.setState({
      detailPageActive: false
    })
  }

  render() {
    return(
      <div>
        <TitlePage />
        <AboutUs />
        <HostList hosts={this.state.office} handleDetails={this.handleDetails}/>
        <HostDetail selectedHost={this.state.selectedHost} active={this.state.detailPageActive} onClose={this.deactiveDetailPage}/>
      </div>
    );
  }
}

export default App;
