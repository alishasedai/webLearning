import React from 'react';
import "./card.css"

const card = (props) => {
  return (
   
      <div className='card'>
        <img src="https://media1.thrillophilia.com/filestore/uwpz857lua13qmvub6um2v93dlrm_IMG%20Worlds%20%20of%20Adventure.jpg" alt="" width={273} height={100}
        style={{border : "4px solid black"}} 
        />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
   
  )
}

export default card
