import React, { useState } from 'react'

const App = () => {
  const [isHover,setIsHover] = useState(false);
  function handleKey(e) {
    console.log(e.key);
  }
  function handleSubmit(e) {
    e.preventDefault();
    alert('Form submitted!');
  } 
  function handleMouseOver(e) {
    if (isHover) {
      e.target.style.color="green";
    }else{
      e.target.style.color="red";
    }
    setIsHover(!isHover);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Type something...' onKeyUpCapture={handleKey} />
      <input type="submit" value="Submit" />
      </form>
      <h1 onMouseOver={handleMouseOver} onMouseOut={handleMouseOver}>Event Handling in React</h1>
      <button onClick={() => alert('Button clicked!')}>Click me!</button>
    </div>
  )
}

export default App