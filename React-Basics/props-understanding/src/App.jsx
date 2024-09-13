import './App.css';
import Card from './Components/Card.jsx';
import {useState,useEffect} from 'react';

function App() {
  const [color, setColor] = useState('rgb(255, 255, 255)'); // Initial color state
  const [intervalId, setIntervalId] = useState(null);       // To store interval ID

  const changeColor = () => {
    // Clear any existing interval before setting a new one
    if (intervalId) {
      clearInterval(intervalId);
    }

    // Set a new interval and store its ID in state
    const newIntervalId = setInterval(() => {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      setColor(`rgb(${r}, ${g}, ${b})`); // Update color state
    }, 1000);

    setIntervalId(newIntervalId); // Save the new interval ID in state
  };
  // eslint-disable-next-line no-undef
  useEffect(() => {
    // Cleanup interval on component unmount or before the effect runs again
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]); // Dependency array includes intervalId

  const stopColor = () => {
    clearInterval(intervalId);
  };

  return (
    <Card 
      changeColor={changeColor} 
      name="Card Title" 
      description="Card Description"
      color={color}
    >
      <h1 style={{ backgroundColor: color, transition: 'background-color 0.5s' }}>Card Title</h1>
      <p>Card Description</p>
      <button onClick={changeColor}>Start Color</button>
      <button onClick={stopColor}>Stop Color</button>
    </Card>
  );
}

export default App;
