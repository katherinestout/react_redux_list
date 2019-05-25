import React, { Component } from 'react';
import DonutCard from './components/DonutCard';
import Wrapper from './components/Wrapper';
const axios = require('axios');

class App extends Component {

  initialState = {
      donut: "",
      donutError: "",
      donutCollection: ""
  }

  state= this.initialState; 

//clearing form when submitted, resetting state to initial state
handleFormReset = () => {
  this.setState(() => this.initialState)
}


  //add donut
  addDonut = () => {
    const {donut} = this.state;
    axios.post('/donuts/post', {
      donut
    }).then(this.handleFormReset());
  //  .catch(err => console.log(err));
  }

//changes in inputs
handleChange = event =>{
  this.setState({ [event.target.name]: event.target.value })
    }
  //submit
handleSubmit = event => {
    event.preventDefault();
    this.addDonut();
  }

  render() {
  
    return (
      <div className="app">
       
          <h1>Donut Shop</h1>
        <form onSubmit = {this.handleSubmit}>
          <label>New Donut:</label>

          <input name = "donut"
          type="text"
          onChange={this.handleChange}
          value={this.state.donut}/>

          <div className="error"> {this.state.donutError}</div>
        
        <button>
          Submit
        </button>
        </form>
        
      </div>
    )
  }
}

export default App;