import React from 'react';

//pass in props and button functionality to each donut type

const DonutCard = props => (

<div>
<p>
{props.donutname} 
</p>

<button className="delete-button" 
onClick={() => props.deleteDonut(props._id)}>DELETE</button>

<span>&nbsp;</span> 

<button className="surprise-button"
onClick={() => props.supriseDonut(props._id)}> SUPRISE ME!</button>

<button className="edit-button"
onClick={() => props.editDonut(props._id)}> EDIT </button>

  </div>

)

export default DonutCard;