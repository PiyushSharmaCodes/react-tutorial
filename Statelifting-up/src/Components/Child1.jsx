/* eslint-disable react/prop-types */
import React from 'react'
import './Child1.css'

const Child1 = (props) => {
    function updateValue(e) {
        props.setSource("child");
        props.setValue(e.target.value);
    
      }
  return (
    <div>
        <input type="text" placeholder='Child1 input' name="input" value={props.value} onChange={updateValue}/>
        <p className={props.source === 'child' ? 'child-change' : 'parent-change'}>Content in child 1:{props.value}</p>
    </div>
  )
}

export default Child1