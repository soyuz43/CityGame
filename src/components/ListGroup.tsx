import { useState } from 'react';
import './ListGroup.css';

interface CityGameProps {}

const CityGame: React.FC<CityGameProps> = () => {
  const [cities, setCities] = useState<string[]>(["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"]);
  const [newCity, setNewCity] = useState<string>("");
  const [diceRoll, setDiceRoll] = useState<number>(0);
  const [cityWon, setCityWon] = useState<string>('');

  const addCity = () => {
    if (newCity.trim() !== "") {
      setCities([...cities, newCity]);
      setNewCity("");
    }
  };

  const handleDiceRoll = () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    setDiceRoll(roll);
    const cityIndex = roll - 1; // Adjust for 0-based index
    setCityWon(cities[cityIndex]);
  };

  return (
    <>
      <h1 className="neon-effect">List of Cities</h1>
      <ul className="list-group">
        {cities.map((city, index) => (
          <li key={index} className="list-group-item neon-effect">{city}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newCity}
        onChange={(e) => setNewCity(e.target.value)}
        placeholder="Add new city"
        className="input-field"
      />
      <button onClick={addCity} className="button">Add City</button>
      <div className="dice-roll-container">
        <h2 className="neon-effect">Dice Roll</h2>
        <p>Roll the dice to win a trip to a city!</p>
        <button onClick={handleDiceRoll} className="dice-roll-button">Roll Dice</button>
        <p className="dice-roll-result neon-effect">Dice Roll: {diceRoll}</p>
        <p className="city-won neon-effect">City Won: {cityWon}</p>
      </div>
    </>
  );
};

export default CityGame;