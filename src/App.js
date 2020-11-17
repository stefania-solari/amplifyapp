import React, {Component} from 'react';
import Clock from './Clock';
import './App.css';
import {Form, FormControl, Button} from 'react-bootstrap';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            deadline: 'December 25, 2020',
            newDeadLine:''
        }
    }

    changeDeadLine(){
        //console.log('state', this.state);
        this.setState({deadline: this.state.newDeadLine})
        //this.setState({deadline: "November 25, 2020"})
        //this.state.deadline = "November 25, 2020";
        //this.state.counter += 1;
    }

    render()
    {
        return(
            <div className= "App">
               <div className= "App-title">Countdown to {this.state.deadline}</div> 
               <Clock 
                    deadline= {this.state.deadline}
               />
                <Form inline = {true}>
                    <FormControl 
                    className= "Deadline-input"
                    placeholder= 'new date'
                    //onChange={event => console.log('event', event.target.value)}
                    //onChange={event => console.log(this.setState({newDeadLine: event.target.value}))}
                    onChange={event => this.setState({newDeadLine: event.target.value})}

                    />
                    <Button onClick= {() => this.changeDeadLine()}>Submit</Button>
                </Form>
               
            </div>
        )
    }
}

export default App;