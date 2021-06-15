import React from 'react';
import './App.css';

function Data(props){
  return <h2>{props.date.toLocaleTimeString()}</h2>
}     


class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date : new Date() 
    };
  }

 
  componentDidMount(){
    this.timerID = setInterval( () => {
      this.thick()
    },1000 );

   
    console.log(this.timerID)    
  }

  
  componentWillUnmount(){
    clearInterval(this.timerID);    
  }

  
  thick(){
    this.setState({
      date : new Date()
    });
  }
  
 
  stop(){
    clearInterval(this.timerID);
    console.log(this.timerID)
  }

  start(){    
    this.timerID = setInterval( () => {
      this.thick()
    },1000);
    
    console.log(this.timerID)
  }
  

  
  render(){
    return (
      <div className="Relogio"> 
        
        <Data date={this.state.date}/>
        <button className="parar_button" onClick={() => this.stop()}>Parar</button>

        <button className="ligar_button" onClick={() => this.start()}>Ligar</button>

      </div>
    )
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock/>
        
      </header>
    </div>
  );
}


export default App;