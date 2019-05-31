import React, { Component } from 'react';
import DonutCard from './components/DonutCard';
import Wrapper from './components/Wrapper';
const axios = require('axios');

class App extends Component {

  initialState = {
      donutname: "",
      donutError: "",
      donutCollection: [],
      adonut: ""
  }

  state= this.initialState; 

  componentDidMount(){
    this.getDonuts();
  }

//clearing form when submitted, resetting state to initial state
handleFormReset = () => {
  this.setState(() => this.initialState)
}

//get all donuts
getDonuts = () => {
  axios.get('http://localhost:5000/donuts/all')
  .then(response => this.setState({donutCollection: response.data}))
  .catch(err => console.log(err));
}

//add a donut
addDonut = () => {
    const {donutname} = this.state;
    axios.post('http://localhost:5000/donuts/post', {
      donutname
    }).then(this.handleFormReset())
    .then(this.getDonuts)
    .catch(err => console.log(err));
  }

//delete a donut
deleteDonut = (_id) => {
    axios.delete(`http://localhost:5000/donuts/${_id}`, {
      _id
    })
    .then(this.getDonuts)
    .catch(err => console.log(err));
}

//click for a suprise donut
supriseDonut = (_id) => {
  const{donutname} = this.state;
    axios.put(`http://localhost:5000/donuts/surprise/${_id}`, {
      donutname,
      _id
    }).then(this.getDonuts)
    .catch(err => console.log(err));

}

//update donut
editDonut = (_id) => {
  axios.put(`http://localhost:5000/donuts/edit/${_id}`, {
    _id
  }).then(this.getDonuts)
  .catch(err => console.log(err));

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

    const {donutCollection} = this.state;
  
    return (
      <div className="app">
          <h1>Donut Shop</h1>


          <Wrapper>
        {donutCollection.map(donut => (
          <DonutCard
          key={donut._id}
          _id = {donut._id}
          id={donut.id}
          donutname = {donut.donutname}

          deleteDonut = {this.deleteDonut}
          supriseDonut = {this.supriseDonut}
          editDonut = {this.editDonut}

                    
         // placeholder = {donut.donutname}
          value= {this.state.donutname}
          onChange = {this.handleChange}
          type = "text"
          />
        ))}
  
     </Wrapper>

        <form onSubmit = {this.handleSubmit}>


          <input name = "donutname"
          type="text"
          onChange={this.handleChange}
          value={this.state.donutname}/>
        
        <button>
        <i className="fas fa-plus"></i>
        </button>

          <div className="error"> {this.state.donutError}</div>
        
    
        </form>
        
      </div>
    )
  }
}

export default App;