import Card from "./MyComponents/UserCard";
import "./App.css";
import mountain from "../public/Assets/Mountain.jpg";
import ocean from "../public/Assets/ocean.webp";
import greenLand from "../public/Assets/GreenLand.webp";
import desert from "../public/Assets/Desert.jpeg";
import city from "../public/Assets/City.png";

const App = () => {
  return (
    <div className="cardContainer">
      <Card tag1="Nature"tag2="Mountain" h1="Peace In Mountains" p="In the mountains, peace prevails. Amongst their silent summits and winding
      trails, the chaos of the world fades away. Here, amidst nature's grandeur, one finds
      a sanctuary where the mind finds rest and the heart finds harmony." image={mountain} />
      <Card
        tag1="Adventure"
        tag2="Ocean"
        h1="Journey Through The Ocean"
        p="The vastness of the ocean is both intimidating and fascinating. Beneath its
waves lies a world teeming with life. Sailing through it, one is reminded of
nature's power and beauty."
        image={ocean}
      />
      <Card
        tag1="Wildlife"
        tag2="Forest"
        h1="The Wilderness Beckons"
        p="Deep in the forest, among towering trees and hidden creatures, the spirit of adventure comes alive. The rustling leaves and the whispers of wildlife call us to explore and reconnect with the earth."
        image={greenLand}
      />
      <Card
        tag1="Desert"
        tag2="Solitude"
        h1="Tranquility in the Desert"
        p="The desert, vast and empty, is a place of solitude. It is a reminder of the
world's raw beauty, where life endures despite the harsh conditions, offering
peace to those who seek silence."
image={desert}
      />
      <Card
        tag1="Urban"
        tag2="Cityscape"
        h1="Lights of the City"
        p="The city, with its towering buildings and endless energy, is a world of its own. It pulses with life and opportunity, where dreams are made and broken. The lights at night remind us of humanity's ambition and resilience."
      image={city}
      />
    </div>
  );
};

export default App;
