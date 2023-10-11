import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
    state = { counter: 0.5 }
    constructor(props) {
        super(props)
        console.log("I am inside constructor")
    }
    incrementCounter = () => {
            this.setState({ counter: (this.state.counter) + 1 })
        }
        // overridden render function 
    render() {
        console.log("Inside the rendor method")
        return ( <
            div >

            <
            button onClick = { this.incrementCounter } > Click me < /button> <
            br / >
            counter: { this.state.counter } <
            /div>
        )
    }
}

//function App(props) {
//   console.log(props.color)

//  return ( <
//     div className = "App" >
//     <
//    header className = "App-header" >
//   <
//   img src = { logo }
//   className = "App-logo"
//  alt = "logo" / >
//  < p > Edit <code> src / App.js </code> and save to reload.</p>
//  <a className = "App-link"
//   href = "https://reactjs.org"
//  target = "_blank"
//  rel = "noopener noreferrer" > Learn React </a>      
//  </header>      
// </div>
//  );
//}

export default App;