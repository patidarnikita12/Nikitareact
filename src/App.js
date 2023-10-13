import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
    state = { counter: 0.5 }
    constructor(props) {
        super(props)
        console.log("I am inside constructor")
    }
    static getDrivedStateFromProps() {
        console.log("I am inside getDrivedStateFromProps")
        return true
    }
    shouldComponentUpdate() {
        console.log("inside shouldComponentUpdate")
        return true
    }
    incrementCounter = () => {
            this.setState({ counter: (this.state.counter) + 1 })
        }
        // overridden render function 
    render() {
        console.log("Inside the rendor method")
        console.log(this.props)
        return ( <
            div >

            <
            button onClick = { this.incrementCounter } > Click me < /button>   <
            br / >
            counter: { this.state.counter }


            <
            /div>
        )
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Inside getSnapshotBeforeUpdate")
        console.log("Previous Prop:")
        console.log(prevProps)
        console.log("Previous State:")
        console.log(prevState)
        console.log("--------------------")
        console.log("Updated Prop:")
        console.log(this.props)
        console.log("Update State:")
        console.log(this.state)
        return true
    }
    componentDidMount() {
        console.log("I am inside componentDidMount")
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