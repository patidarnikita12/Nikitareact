import logo from './logo.svg';
import './App.css';
import React from 'react';

// class App extends React.Component {
//     state = { counter: 0 }
//     constructor(props) {
//         super(props)
//         console.log("I am inside constructor")
//     }
//     static getDrivedStateFromProps() {
//         console.log("I am inside getDrivedStateFromProps")
//         return true
//     }
//     shouldComponentUpdate() {
//         console.log("inside shouldComponentUpdate")
//         return true
//     }
//     incrementCounter = () => {
//             this.setState({ counter: (this.state.counter) + 1 })
//         }
//         // overridden render function 
//     render() {
//         console.log("Inside the rendor method")
//         console.log(this.props)
//         return ( 
//             <div >

//             <button onClick = { this.incrementCounter } > Click me </button>   
//             <br/>
//             counter: { this.state.counter }


//             </div>
//         )
//     }
//     getSnapshotBeforeUpdate(prevProps, prevState) {
//         console.log("Inside getSnapshotBeforeUpdate")
//         console.log("Previous Prop:")
//         console.log(prevProps)
//         console.log("Previous State:")
//         console.log(prevState)
//         console.log("--------------------")
//         console.log("Updated Prop:")
//         console.log(this.props)
//         console.log("Update State:")
//         console.log(this.state)
//         return true
//     }
//     componentDidMount() {
//         console.log("I am inside componentDidMount")
//     }
// }

function App() {
    class student {
        Name
        Age
        RollNo
        Email
        constructor(Name, Age, RollNo, Email) {
            this.Name = Name
            this.Age = Age
            this.RollNo = RollNo
            this.Email = Email

        }
        printStudent() {
            console.log("Name: " + this.Name)
            console.log("Age: " + this.Age)
            console.log("RollNo: " + this.RollNo)
            console.log("Email: " + this.Email)
        }
    }
    let st = new student
    st.Age = 11
    st.Name = "Nikita"
    st.RollNo = 111
    st.Email = "nikita@gamil.com"
    let Nikita = new student("Patidar", 23, 101, "patidarnikita36@gmail.com")
    Nikita.printStudent()

    console.log("student:" + st)
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        <
        p > Edit < code > src / App.js < /code> and save to reload.</p >
        <
        a className = "App-link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer" > Learn React < /a>        <
        /header>  <
        /div>
    );
}

export default App;