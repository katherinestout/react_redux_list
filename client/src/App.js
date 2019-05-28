import React, { Component } from 'react';
import DonutCard from './components/DonutCard';
import Wrapper from './components/Wrapper';
const axios = require('axios');

class App extends Component {

  initialState = {
      donutname: "",
      donutError: "",
      donutCollection: ""
  }

  state= this.initialState; 

  componentDidMount(){
    this.getDonuts();
  }

//clearing form when submitted, resetting state to initial state
handleFormReset = () => {
  this.setState(() => this.initialState)
}

getDonuts = () => {
  axios.get('http://localhost:5000/donuts/all')
 // .then(response => console.log(response.data))
  .then(response => response.json())
  .then(response => this.setState({donutCollection: response.data}))
  //.then(console.log(this.state.donutCollection))
  .catch(err => console.log(err));
}

  //add donut
addDonut = () => {
    const {donutname} = this.state;
    axios.post('http://localhost:5000/donuts/post', {
      donutname
    }).then(this.handleFormReset())
    .catch(err => console.log(err));
  }

//delete donut
deleteDonut = () => {

}

//update donut
updateDonut = () => {

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

    //const {donutCollection} = this.state;
  
    return (
      <div className="app">
          <h1>Donut Shop</h1>
        <form onSubmit = {this.handleSubmit}>
          <label>New Donut:</label>

          <input name = "donutname"
          type="text"
          onChange={this.handleChange}
          value={this.state.donutname}/>

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