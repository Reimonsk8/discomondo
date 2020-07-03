import React from 'react';
import mondo0 from './assets/mondo0.png';
import mondo1 from './assets/mondo1.png';
import discomap from './assets/DISCO MONDO MAPA.png'
import discologo from './assets/logo disco mondo solido.png'
import discologocon from './assets/isotipo contorno.png'
import './styles/App.css';
import './styles/magnetic.css';
import $ from 'jquery';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={apiResponse:""};
  }

  callAPI(){
    fetch("http://localhost:5000/testAPI")
      .then(res=> res.text())
      .then(res=> res.setState({apiResponse: res}));
  }







  componetWillMount(){
    this.callAPI();
  }

















  componentDidMount(){
    
    console.clear();
    
    var imgs = [ discologo, discologocon]
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
      },2000);
    }















































    const { gsap } = window;

    const cursorOuter = document.querySelector(".cursor--large");
    const cursorInner = document.querySelector(".cursor--small");
    let isStuck = false;
    let mouse = {
      x: -100,
      y: -100,
    };

    // Just in case you need to scroll
    let scrollHeight = 0;
    window.addEventListener('scroll', function(e) {
      scrollHeight = window.scrollY
    })

    let cursorOuterOriginalState = {
      width: cursorOuter.getBoundingClientRect().width,
      height: cursorOuter.getBoundingClientRect().height,
    };
    const buttons = document.querySelectorAll("main button");

    buttons.forEach((button) => {
      button.addEventListener("pointerenter", handleMouseEnter);
      button.addEventListener("pointerleave", handleMouseLeave);
    });

    document.body.addEventListener("pointermove", updateCursorPosition);
    document.body.addEventListener("pointerdown", () => {
      gsap.to(cursorInner, 0.15, {
        scale: 2,
      });
    });
    document.body.addEventListener("pointerup", () => {
      gsap.to(cursorInner, 0.15, {
        scale: 1,
      });
    });

    function updateCursorPosition(e) {
      mouse.x = e.pageX;
      mouse.y = e.pageY;
    }

    function updateCursor() {
      gsap.set(cursorInner, {
        x: mouse.x,
        y: mouse.y,
      });

      if (!isStuck) {
        gsap.to(cursorOuter, {
          duration: 0.15,
          x: mouse.x,
          y: mouse.y,
        });
      }

      requestAnimationFrame(updateCursor);
    }

    updateCursor();

    function handleMouseEnter(e) {
      isStuck = true;
      const targetBox = e.currentTarget.getBoundingClientRect();
      gsap.to(cursorOuter, 0.2, {
        x: targetBox.left + targetBox.width / 2,
        y: (targetBox.top + targetBox.height / 2) + scrollHeight,
        width: targetBox.width,
        height: targetBox.width,
        borderRadius: 0,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      });
    }

    function handleMouseLeave(e) {
      isStuck = false;
      gsap.to(cursorOuter, 0.2, {
        width: cursorOuterOriginalState.width,
        height: cursorOuterOriginalState.width,
        borderRadius: "50%",
        backgroundColor: "transparent",
      });
    }























    
  }

render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={discologo} id="disco-logo" alt="logo" />
        <img src={discomap} id="disco-map" alt="logo" />
        <img src={mondo1} className="App-logo" alt="logo" />
      </header>
      <div>
        
        <p>{this.state.apiResponse}</p>
        <iframe width="914" height="514" src="https://www.youtube.com/embed/a768UxZnr68" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        <main>
          <button>
            <ion-icon name="logo-facebook"></ion-icon>
          </button>
          <button>
            <ion-icon name="logo-twitter"></ion-icon>
          </button>
          <button>
            <ion-icon name="logo-instagram"></ion-icon>
          </button>
          <button>
            <ion-icon name="logo-youtube"></ion-icon>
          </button>
          <button>
            <ion-icon name="logo-dribbble"></ion-icon>
          </button>
        </main>

        <div class="cursor cursor--large"></div>
        <div class="cursor cursor--small"></div>


        <div class="support">
          <a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter-square"></i></a>
          <a href="http://34.211.44.78/" target="_blank"><i class="fab fa-dribbble"></i></a>
        </div>

        <div class="corner-left">
          <div class="g-ytsubscribe" data-channelid="UCVp_cqz0UCKFUzURdcqTj7g" data-layout="full" data-theme="dark" data-count="default"></div>
        </div>

      </div>
    
    </div>
  );
  }
}

export default App;
