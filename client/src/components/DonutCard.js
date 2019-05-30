import React from 'react';

//pass in props and button functionality to each donut type

const DonutCard = props => (

<div>
<p>
{props.donutname} 

</p>

<button className="delete-button" 
onClick={() => props.deleteDonut(props.id)}>DELETE</button>

<span>&nbsp;</span> 

<button className="update-button"
onClick={() => props.supriseDonut(props.id)}> SUPRISE ME</button>

<button className="edit-button"
onClick={() => props.editDonut(props.id)}> EDIT </button>

  </div>

)

export default DonutCard;