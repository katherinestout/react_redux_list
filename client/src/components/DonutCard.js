import React from 'react';

const DonutCard = props => (

<div>
  
{props.donutname}

<i className="far fa-trash-alt" onClick={() => props.deleteDonut(props._id)}></i>


<button className="surprise-button"
onClick={() => props.supriseDonut(props._id)}> SUPRISE ME!</button>



  </div>

)

export default DonutCard;