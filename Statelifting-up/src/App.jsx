import { useState } from 'react'
import './App.css'
import Child1 from './Components/Child1';

function App() {
  const [value,setValue]=useState("");
  const [source, setSource] = useState("");
  function updateValue(e) {
    setSource("parent");
    setValue(e.target.value);
  }
  return (
    <>
    <p className={source === 'parent' ? 'parent-change' : 'child-change'}>Content in parent:{value}</p>
      <input type="text" placeholder='Parent input' name="input"value={value} onChange={updateValue} />
      <Child1 value= {value} setValue={setValue} source={source} setSource={setSource} />
    </>
  )
}

export default App
