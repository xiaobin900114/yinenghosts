import React from 'react';
import './App.css';
import TitlePage from './Components/TitlePage/TitlePage';
import AboutUs from './Components/AboutUs/AboutUs';
import HostList from './Components/HostList/HostList';
import HostDetail from './Components/HostDetail/HostDetail';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';

const offices = [
  {
    id: 1,
    name: "Los Angeles",
    hosts: {
      bin:{
        id: 11,
        profile: 'https://lh3.googleusercontent.com/WRyrOXROD5iRUS_eB2HAuOFR1xAsxy-da0-hhsk4RIP1YrqggYkfMS4uIrCU7b0kqjbr76EIEFIjJt_61iHlb5dZ0C7-M8Zgj-KQYva5DJrUghpm3m5CxfkAXJajbfrMht9wVBJDpQ=s305-p-k',
        name: "Binbin",
        description: "Hey, this is Bin, a grad student from Master of Human-Computer Interaction(MHCI), School of Computer Science at CMU. I am the co-founder and CEO of YinengFM.",
        linkedIn:'https://www.linkedin.com/in/xiaobinli/',
        email:'xiaobin2@andrew.cmu.edu',
      },
      sai:{
        id: 12,
        profile: 'https://lh3.googleusercontent.com/nrZJJoTt6ETrCYWLuoU9JTv2yaNIXxKLLh25ffV0XIuMREx2MDcnwCLB9pcMvGvuDOpRvAIUzvTogFGybtWCAZblZDL-peC_4ealZeHFQEY40-bURYHF_Cv4G4gcJewDD7KbJAjg9g=s305-p-k',
        name: "Sai",
        description: "My name is Sai Jiao, graduate from art center colloge of design at 2015. After art center I’m smoothly get into the theme park industry, I played an important role responsible to deliver designs and drawings that exceeded client expectations in most of Thinkwell's projects. As an integral part of the company, I had the pleasure to collaborate and Art Director with several talented individuals varying in skills and disciplines. #Project list:#Ain Dubai, Kingdom Animalia adventure park Oman, DRIV golf lounge and brewhouse, Dubai Mall ice rink and adventure park, Lionsgate theme park China, Evergrande Group theme park China, Warner Bros theme park Abu Dhabi , HBO, Nickelodeon in amusement parks, Snow park Abu Dhabi, Universal Orlando (Lord of the rings) , Universal London (Harry potter), Universal Monsters, Nixon museum, Oval office, Warner Bros Tour center.#At July 2019 I created KICKSNEAKER, We provide perfect sneaker care services for sneaker head.",
        linkedIn:'https://www.linkedin.com/in/sai-jiao-09053bb1/',
        email:'info@yineng.fm',
      },
      moon:{
        id: 13,
        profile: 'https://lh3.googleusercontent.com/PgtzzVoNATQoASPzAQgLhOZf-6ad1_Y7Oi7tZ9TRaxQ_pZe7b9IEkhBPeohK0brw7fmpHKdT623oSNtqHOJmGdhO6XfI4hfYZdwcLJRY_z10BXVLGSNVxSmiK1wE7mKOtm7tMxX0qw=s305-p-k',
        name: "Moon",
        description: "My name is Moon Qi and Monkey Rider is my nickname in YinengFM. I am a LA based character and toy deisgner. The passion on drawing made me becoming a designer, the willing to communicate with people made the establishment of YinengFM.",
        linkedIn:'https://www.linkedin.com/in/moonqi/',
        email:'info@yineng.fm',
      },
      oba:{
        id: 14,
        profile: 'https://lh3.googleusercontent.com/rCLQ-6pidgE1Z9wVXK9WiP3n0QyKcWsaBKzY60uAHX9S1N14OR7NVsMKW4KNDOcp2hGKrz0Moe6RXwxuSb-aOLhiXBdz1qsblWQ8TLBbd2NvteYptZC1H8_HR8wSG7Iz62ZTznlyhA=s305-p-k',
        name: "Oba",
        description: "My name is Xiao Zhang, an automotive designer with years of experience both in China and United States. Throughout my professional career, I am lucky enough to have precious opportunities working in Fortune Global 500 companies such as Ford, BMW and Nissan, which gave me first-hand chances to observe world-class design activities everyday. In addition, I had the chance to work in Faraday Future, an electric vehicle start-up in Los Angeles, which allows me to experience a much faster work flow and operation dynamic.#As a designer, I am always self-motived and working hard to improve my design skills in the professional working environment during the past few years. And now I believe it is time to start thinking about design in a more strategic way. Therefore, I started taking MBA classes and I believe proper business thinking, understanding of the market and valuable knowledge of management can definitely be helpful for a long-term career development.",
        linkedIn:'https://www.linkedin.com/in/xiao-zhang-644473a1/',
        email:'info@yineng.fm',
      },
      jean:{
        id: 15,
        profile: 'https://lh3.googleusercontent.com/VGQ_g8_C5Z1hhTiesiPhGPtaOVMLfIssVpLEX-CAFYuLx-AjD1MnvdRXYyjWEukuA2GwWcDqTI6Puc9yC_Ck0m4gMdQG8wydBbRMhWMYmai5f-TfbhsMI_lmulWDX_xM7tp-njbdCQ=s305-p-k',
        name: "Jean",
        description: "I graduated from Artcenter College of Design, as a multidisciplinary designer specializing in Brand Identity, Visual Design, and Human-centered Interaction Design. Currently, I am prusing my Master of Human-Computer Interaction + Design degree at the University of Washington in Seattle.",
        linkedIn:'https://www.linkedin.com/in/jeanxhe/',
        email:'info@yineng.fm',
      },
      chang:{
        id: 16,
        profile: 'https://lh3.googleusercontent.com/_2IdftYyAdUmf1qjVjifFTeCWguD0EgqpXureu0pUUHu5pfiD5MFQRrUL9WZDlm8NOmgo6K4sVScP3Z19HA3cc35IhT6xj2sSckO9lcNQejSGvbYozeUlPtci_4BGZOya3x_NJeKVg=s305-p-k',
        name: "Zhaokun Wang",
        description: "As an industrial designer with transportation design background, my goal is always to create design with clarity and simplicity on both functionality and aesthetics. Through the experience at both OEM and tech companies, I’ve gained a comprehensive understanding of autonomy, technology and how they are going to impact on the future of transportation. My developed skillset allows me to effectively apply all the knowledge into the whole design process from concept development to 2D/3D visualization.",
        linkedIn:'https://www.linkedin.com/in/zhaokun-wang-940a49ab/',
        email:'info@yineng.fm',
      },
      huang:{
        id: 17,
        profile: 'https://lh3.googleusercontent.com/wqvBDKpSs_Vrc-6fLvgkaGla96foICpZRI8ejwfaZaauR_GByV0RpgXHLPqGSdQ6IfmyLuxTU5NNNSJM6GkcoZlgVa3C2lymRr2EUnHclvgu10kyzM56Q8dNS4h9bYlimcpTSkHNvw=s305-p-k',
        name: "Yilin Huang",
        description: "Yacht Designer#Young Designer of the Year 2018 -- Special Judges' Mention Award -- Professional Category",
        linkedIn:'https://www.linkedin.com/in/yilin-huang-a66b778b/',
        email:'info@yineng.fm',
      },
      kui:{
        id: 18,
        profile: 'https://lh3.googleusercontent.com/jZZm5o1M4De590wDzaPuesivJyvXp-u2KWDoTiJw6-8btgfd75B8UzttMNMcnVdXcGvWpmIlNGBMHWAVPmyUhkBRRWGiymu7EC_AFzEZNuQ0dTdWDETjzBgM3abam4CqyKjybwKFoA=s305-p-k',
        name: "Kui Cai",
        description: "Hi, I'm Kui Cai. I am a strategic designer that creates insight-driven innovation and desirable experiences through an empathetic design process. Since 2008, I spent over nine years working in the sports footwear industry as a sneaker designer and a product manager.",
        linkedIn:'https://www.linkedin.com/in/kui-cai-57837656/',
        email:'info@yineng.fm',
      },
    }
  },
  {
    id: 2,
    name: "Shanghai",
    hosts: {
      junjun:{
        id: 21,
        profile: 'https://lh3.googleusercontent.com/1sZ48um7ZlVeP1Nbh5IAEHai_jcNp6RVsJheYpUdxHJ8tkcCCGcN-zLF43VYJjv-YdkmsCUVqEB5hrQhQMNd63cmq_lKxXoYM9qDoWVHGa_nUq09HToRugrl1WaOFSGrwE2N3Wa9qw=s305-p-k',
        name: "Junjun",
        description: "Co-Founder of YinengFM, (Physical) Product Design Enthusiastic.#I consider myself to be part detective, part entrepreneur and a complete lover of materials.#When I’m a “detective”, I like to reach out to people, practicing empathy and really listening to their wants and dreams, to find connections and patterns and applying those insights to my design.#As an entrepreneur, YinengFM is definitely our BABY! #Materials! The soft yet solid texture of leather, the smell, and feel of a quality piece of walnut, I close my eyes and find inspiration from the materials I choose.",
        linkedIn:'https://www.linkedin.com/in/junjunshi/',
        email:'info@yineng.fm',
      },
      peng:{
        id: 22,
        profile: 'https://lh3.googleusercontent.com/a4BLRjKti356OhBGchbxbSYE8GiPVTN4HxQA5CTJrKyeQnj9kIgXgiDHAm6btT5VoeQshHMTNMhYzRjQGkZ0vyl9uOAn7LvgntD6Zh9sZ3zvUoGRuv7pRkH8E2BPLSdBMCmuiNCgpw=s305-p-k',
        name: "Peng Zheng",
        description: "I am Peng, a product designer passionate about creating delightful products for people. I value the integration of pixel-perfect interfaces with fluid user experience",
        linkedIn:'https://www.linkedin.com/in/pengzheng1/',
        email:'info@yineng.fm',
      },
      pupu:{
        id: 23,
        profile: 'https://lh3.googleusercontent.com/D-XgGF8k2-s8yXhvDl9XEsLBIfYLvxUxx3J9_dpA2-Nu4I9wQlDq3Ftp-gJ7PHLbU16g4H1mfSkpGINBidyOwmDBR7GLVSz2OoRUNc2xSxzbLWBldfc77g-JhkK5zZOOcUf2clxu9w=s305-p-k',
        name: "Pupu",
        description: "Hi, I’m PuPu. I’m taking care of packaging prototyping in a FMCG company and being a part-time podcaster of YinengFM Shanghai. Meanwhile, I’m addicted with traditional handicrafts. Through building the accessory brand “BUZHI”, I want to bring these handicrafts back to people’s life today.",
        linkedIn:'https://www.linkedin.com/comm/in/yanhuapu',
        email:'info@yineng.fm',
      },
      huahua:{
        id: 24,
        profile: 'https://lh3.googleusercontent.com/x08-1Ww6PEaYz7yan2eAJWF5yGAB6XID1xdX69IDZfHMw1hCGhsZzbe6TSnHIbn57u92py1kxgajtkMwsvFpPAgW3BM1JmwkmHy3Ck850dlPXgkNeyYL-T1EnmbxvFPya3km1YA8bQ=s305-p-k',
        name: "Huahua",
        description: "This is Huahua, who used to be an UX designer，and would be a/an _ designer in the future. #I feel so curious and hopeful living in such a creative age with new technology, new scenes and new professions emerge in endlessly. Even so, I am a little confused and pessimistic about HOW any WHY should we changing the world, so I re-think of my surroundings as a playground. I want to create something, it can be anything fun and might be useful. if it happens to bring people some happiness, that would be wonderful！I learn to master different skills such as design, business, programming, etc., these tools (as playground tickets) help me to interact and communicate with the world . Trying anything with excellent partners, just playing and have fun.",
        linkedIn:'https://www.linkedin.com/in/wangyanjieada',
        email:'info@yineng.fm',
      },
    }
  },
  {
    id: 3,
    name: "Tokyo",
    hosts: {
      junjun:{
        id: 31,
        profile: 'https://lh3.googleusercontent.com/1sZ48um7ZlVeP1Nbh5IAEHai_jcNp6RVsJheYpUdxHJ8tkcCCGcN-zLF43VYJjv-YdkmsCUVqEB5hrQhQMNd63cmq_lKxXoYM9qDoWVHGa_nUq09HToRugrl1WaOFSGrwE2N3Wa9qw=s305-p-k',
        name: "Junjun",
        description: "Co-Founder of YinengFM, (Physical) Product Design Enthusiastic.#I consider myself to be part detective, part entrepreneur and a complete lover of materials.#When I’m a “detective”, I like to reach out to people, practicing empathy and really listening to their wants and dreams, to find connections and patterns and applying those insights to my design.#As an entrepreneur, YinengFM is definitely our BABY! #Materials! The soft yet solid texture of leather, the smell, and feel of a quality piece of walnut, I close my eyes and find inspiration from the materials I choose.",
        linkedIn:'https://www.linkedin.com/in/junjunshi/',
        email:'info@yineng.fm',
      },
      shushu:{
        id: 32,
        profile: 'https://lh3.googleusercontent.com/HLGeqa2GtohsKRRcU_2FKQdCIJfsjqrsN74vljIJ1ArA7hkc4oz9sTB-Oksx3h4fRKnhRTcfO_pfWUWXqySXaTr5Cu5_37wW57y09Bg3odZAzFYb3kln5wC3sYmTFhVXxKjPw8q47A=s305-p-k',
        name: "Uncle Chow",
        description: "Hi, I'm Uncle Chow who is determined to create cinematic masterpieces since I met YinengFM. And YinengFM changed me a lot. Now, I'm working at YinengFM TOKYO as a YINENGer and i'm loving my teammates. I'm so honored to join this big family because we created so many great content about Design, Technology and so on. If you ask me what's my big decision in last couple years, i'm gonna tell you that i joined THIS PARTY without hesitation!",
        linkedIn:'',
        email:'info@yineng.fm',
      },
    }
  }
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      office: offices[0],
      selectedHost: {},
      detailPageActive: false
    } ;
    this.handleDetails = this.handleDetails.bind(this);
    this.deactiveDetailPage = this.deactiveDetailPage.bind(this);
    this.handleOfficeChange = this.handleOfficeChange.bind(this);
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

  handleOfficeChange(office) {
    for(let i=0; i<offices.length; i++) {
      console.log(offices[i]);
      if(offices[i].name === office) {
        this.setState({
          office: offices[i],
        })
      }
    }
  }

  render() {
    return(
      <div>
        <Navbar />
        <TitlePage />
        <AboutUs id='aboutus'/>
        <HostList office={this.state.office} handleDetails={this.handleDetails}
        onOfficeChange={this.handleOfficeChange}
        />
        <HostDetail selectedHost={this.state.selectedHost} active={this.state.detailPageActive} onClose={this.deactiveDetailPage}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
