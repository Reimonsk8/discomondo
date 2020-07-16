import React from 'react';
//import mondo0 from './assets/mondo0.png';
import mondo1 from './assets/mondo1.png';
import discomap from './assets/DISCO MONDO MAPA.png'
import discologo from './assets/logo disco mondo solido.png'
import discologocon from './assets/isotipo contorno.png'
import './styles/App.css';
import './styles/magnetic.css';
import $ from 'jquery';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
    
    this.callHome = this.callHome.bind(this);
    this.callRes = this.callRes.bind(this);
    this.callJSON = this.callJSON.bind(this);
  }

  callHome(){
    fetch("/")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: " " }));
  }

  callRes(){
    fetch("/testRES")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  callJSON(){
    fetch("/testJSON")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount(){
    //this.callHome();
  }



  componentDidMount(){
    
    //console.clear();
    
    var imgs = [discologo, discologocon]
    var spins = 0;
    var item = $("#disco-logo") 
    spin(item);
    
    function spin(target){
      target.css({"animation":"start 1s linear"});
      setTimeout(function(){
        target.css({"animation":"end 1s linear"});
        target.attr("src",imgs[spins++ % imgs.length])
      },1000);
      
      setTimeout(function(){
        spin(target);
      },3000);
    }
    
  }

render(){
  return (
    <div className="App">
      <header className="App-header">
      </header>
        <img src={discologo} id="disco-logo" alt="logo" onClick={this.callHome}/>

      </div>
  );
  }
}

export default App;
