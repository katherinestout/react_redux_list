import React from 'react';

//pass in props and button functionality to each donut type
/* <input name = "donutname"
placeholder = {props.donutname}
/>*/


const DonutCard = props => (

<div>
<input name = "donutname"
type = "text"
handleChange = {props.handleChange}
value = {props.donutname}
donutname = {props.donutname}
/>

{props.donutname}

<i className="far fa-trash-alt" onClick={() => props.deleteDonut(props._id)}></i>


<button className="surprise-button"
onClick={() => props.supriseDonut(props._id)}> SUPRISE ME!</button>

<i className="far fa-edit" onClick={() => props.editDonut(props._id)}></i>


  </div>

)

export default DonutCard;