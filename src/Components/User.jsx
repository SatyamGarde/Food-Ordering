import React, { useState } from 'react'

function User(props) {
  const [count, setCount] = useState(0);
  const [count2, setCount2]  =useState(2);
  return (
    <div>
        <div className='btn'>
          <button onClick={()=>{
            setCount(count+1);
          }}>Counter</button>
        </div>
        <h1>{count}</h1>
        <h1>{count2}</h1>
        <li>{props.name}</li>
        <li>{props.location}</li>
    </div>
  )
}

export default User;