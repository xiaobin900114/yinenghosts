import React from 'react';
import logo from './logo.svg';
import './App.css';
import TitlePage from './Components/TitlePage/TitlePage';
import AboutUs from './Components/AboutUs/AboutUs';
import HostList from './Components/HostList/HostList';
import HostDetail from './Components/HostDetail/HostDetail';

const laOffice = {
  bin:{
    profile: 'https://lh3.googleusercontent.com/WRyrOXROD5iRUS_eB2HAuOFR1xAsxy-da0-hhsk4RIP1YrqggYkfMS4uIrCU7b0kqjbr76EIEFIjJt_61iHlb5dZ0C7-M8Zgj-KQYva5DJrUghpm3m5CxfkAXJajbfrMht9wVBJDpQ=s305-p-k',
    name: "bin",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  sai:{
    profile: 'https://lh3.googleusercontent.com/nrZJJoTt6ETrCYWLuoU9JTv2yaNIXxKLLh25ffV0XIuMREx2MDcnwCLB9pcMvGvuDOpRvAIUzvTogFGybtWCAZblZDL-peC_4ealZeHFQEY40-bURYHF_Cv4G4gcJewDD7KbJAjg9g=s305-p-k',
    name: "sai",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  moon:{
    profile: 'https://lh3.googleusercontent.com/PgtzzVoNATQoASPzAQgLhOZf-6ad1_Y7Oi7tZ9TRaxQ_pZe7b9IEkhBPeohK0brw7fmpHKdT623oSNtqHOJmGdhO6XfI4hfYZdwcLJRY_z10BXVLGSNVxSmiK1wE7mKOtm7tMxX0qw=s305-p-k',
    name: "moon",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  oba:{
    profile: 'https://lh3.googleusercontent.com/rCLQ-6pidgE1Z9wVXK9WiP3n0QyKcWsaBKzY60uAHX9S1N14OR7NVsMKW4KNDOcp2hGKrz0Moe6RXwxuSb-aOLhiXBdz1qsblWQ8TLBbd2NvteYptZC1H8_HR8wSG7Iz62ZTznlyhA=s305-p-k',
    name: "oba",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  jean:{
    profile: 'https://lh3.googleusercontent.com/VGQ_g8_C5Z1hhTiesiPhGPtaOVMLfIssVpLEX-CAFYuLx-AjD1MnvdRXYyjWEukuA2GwWcDqTI6Puc9yC_Ck0m4gMdQG8wydBbRMhWMYmai5f-TfbhsMI_lmulWDX_xM7tp-njbdCQ=s305-p-k',
    name: "jean",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  chang:{
    profile: 'https://lh3.googleusercontent.com/_2IdftYyAdUmf1qjVjifFTeCWguD0EgqpXureu0pUUHu5pfiD5MFQRrUL9WZDlm8NOmgo6K4sVScP3Z19HA3cc35IhT6xj2sSckO9lcNQejSGvbYozeUlPtci_4BGZOya3x_NJeKVg=s305-p-k',
    name: "chang",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      office: laOffice,
      selectedHost: laOffice.sai,
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
