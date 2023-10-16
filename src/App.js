import logo from './logo.svg';
import './App.css';
import React from 'react';

class InnerComponent extends React.Component {
    constructor() {
        super()


    }
    render() {
        return <div > Inner component is here < /div>
    }
    componentWillUnmount() {
        console.log("Inside componentWillUnmount")
    }

}
class App extends React.Component {
        state = {
            counter: 0,
            innerComponent: < InnerComponent / >
        }
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
                this.setState({
                        innerComponent: < div > Component is unmounted < /div>})
                    }
                    // overridden render function 
                    render() {
                        console.log("Inside the rendor method")
                        console.log(this.props)
                        return ( <
                            div >

                            <
                            button onClick = { this.incrementCounter } > Click me < /button>    <
                            br / >
                            counter: { this.state.counter } <
                            br / >

                            { this.state.innerComponent }

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

                //function App() {
                // class student {
                //     Name
                //     Age
                //     RollNo
                //     Email
                //     constructor(Name, Age, RollNo, Email) {
                //         this.Name = Name
                //         this.Age = Age
                //         this.RollNo = RollNo
                //         this.Email = Email

                //     }
                //     printStudent() {
                //         console.log("Name: " + this.Name)
                //         console.log("Age: " + this.Age)
                //         console.log("RollNo: " + this.RollNo)
                //         console.log("Email: " + this.Email)
                //     }
                // }
                // class Monitor extends student {
                //     batch
                //     constructor(Name, Age, RollNo, Email, batch) {
                //         super(Name, Age, RollNo, Email)
                //         console.log("Called Monitor Constructor")
                //         this.batch = batch
                //         console.log("Monitor constructor completed work ")
                //     }
                //     printMonitor() {
                //         super.printStudent()
                //         console.log("Monitor print started work")
                //         console.log("batch=" + this.batch)
                //         console.log("Monitor print completed work")
                //     }
                // }
                // console.log("Starting to create moniter object")
                // let moniterManish = new Monitor("Manisha baghel", 12, 112, "email", "React")
                // console.log("starting to print")
                // moniterManish.printMonitor()
                // console.log("completed to print")
                // let st = new student
                // st.Age = 11
                // st.Name = "Nikita"
                // st.RollNo = 111
                // st.Email = "nikita@gamil.com"
                // let Nikita = new student("Patidar", 23, 101, "patidarnikita36@gmail.com")
                // Nikita.printStudent()

                //console.log("student:" + st.student)
                // return ( 
                //     < div className = "App" >
                //     <header className = "App-header" >
                //     <img src = { logo }
                //     className = "App-logo"
                //     alt = "logo" />
                //     <
                //     p > Edit <code> src / App.js </code> and save to reload.</p >
                //     <a className = "App-link"
                //     href = "https://reactjs.org"
                //     target = "_blank"
                //     rel = "noopener noreferrer" > Learn React </a>        
                //     </header >
                //      </div>
                // );
                //}

                export default App;