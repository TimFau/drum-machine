import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let drumPads = [
    {id: 'kick_2', key: 'Q', desc: 'Kick Drum 1', src: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Basic/74[kb]kick2.aif.mp3'},
    {id: 'kick_1', key: 'W', desc: 'Kick Drum 2', src: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Basic/60[kb]kick1.aif.mp3'},
    {id: 'tom', key: 'E', desc: 'Tom Drum', src: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Basic/31[kb]tom1.aif.mp3'},
    {id: 'snare', key: 'A', desc: 'Snare', src: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Basic/8[kb]snare.aif.mp3'},
    {id: 'maraca', key: 'S', desc: 'Maracas', src: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Basic/2[kb]maracas.aif.mp3'},
    {id: 'hi_hat', key: 'D', desc: 'High Hat', src: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Basic/51[kb]open_hh.aif.mp3'},
    {id: 'cow_bell', key: 'Z', desc: 'Cow Bell', src: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Basic/29[kb]cowbell.aif.mp3'},
    {id: 'hand_clap', key: 'X', desc: 'Hand Clap', src: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Basic/31[kb]handclap.aif.mp3'},
    {id: 'hi_conga', key: 'C', desc: 'High Conga', src: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Basic/15[kb]hi_conga.aif.mp3'},
  ];
  class DrumMachineApp extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        display: '',
        key: ''
      }
      this.clickHandler = this.clickHandler.bind(this);
      this.keydownHandler = this.keydownHandler.bind(this);
    }
    clickHandler(e) {
      document.getElementById(e.key).play();
      this.setState({
        display: e.desc,
        key: e.key
      })
    }
    keydownHandler(e) {
      for(var i = 0; i < drumPads.length; i++) {
        if(drumPads[i].key === e.key.toUpperCase()){
           document.getElementById(drumPads[i].key).play();
           this.setState({
            display: drumPads[i].desc,
            key: e.key
           })
        }
      }
    }
    
    componentDidMount(){
      document.addEventListener('keydown', this.keydownHandler);
    }
    render() {
      const drumPadsMap = drumPads.map(item =>
        <div id={item.id} className="drum-pad" onClick={() => this.clickHandler(item)}>
           <span className="pad-key">{item.key}</span>
           <span className="pad-sound">{item.desc}</span>
           <div className="drum-pad-square"></div>
           <audio id={item.key} src={item.src} className="clip"></audio>
        </div>
      );
      return (
        <div id="drum-machine">
          <div class="screen-controls">
            <div id="display">
              <span>Key: {this.state.key}</span>
              <span>Sample: {this.state.display}</span>
              <span className="dm-tittle">Drum <span>Machine</span></span>
            </div>
          </div>
          <div className="pads-container">
            {drumPadsMap}
          </div>
        </div>
      )
    }
  }
  
  ReactDOM.render(
    <DrumMachineApp />,
    document.getElementById("app")
  )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
