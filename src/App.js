import React from 'react';
import logo from './logo.svg';
import './App.css';
import TitlePage from './Components/TitlePage/TitlePage';
import AboutUs from './Components/AboutUs/AboutUs';
import HostList from './Components/HostList/HostList';
import bin from "./assets/img/bin.png";
import oba from "./assets/img/oba.png";
import jean from "./assets/img/jean.png";
import sai from "./assets/img/sai.png";
import chang from "./assets/img/chang.png";
import moon from "./assets/img/moon.png";

const profiles = [
  "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/background_search_desktop.jpg",
  "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/background_search_desktop.jpg",
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = profiles;
  }


  render() {
    return(
      <div>
        <TitlePage />
        <AboutUs />
        <HostList hosts={this.state}/>
      </div>
    );
  }
}

export default App;
