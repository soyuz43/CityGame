import { useState } from 'react';

function CityGame() {
  const [cities, setCities] = useState(["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"]);
  const [newCity, setNewCity] = useState("");
  const [diceRoll, setDiceRoll] = useState(0);
  const [cityWon, setCityWon] = useState('');

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
      <h1>List of Cities</h1>
      <ul className="list-group">
        {cities.map((city, index) => (
          <li key={index} className="list-group-item">{city}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newCity}
        onChange={(e) => setNewCity(e.target.value)}
        placeholder="Add new city"
      />
      <button onClick={addCity}>Add City</button>
      <div>
        <h2>Dice Roll</h2>
        <p>Roll the dice to win a trip to a city!</p>
        <button onClick={handleDiceRoll}>Roll Dice</button>
        <p>Dice Roll: {diceRoll}</p>
        <p>City Won: {cityWon}</p>
      </div>
    </>
  );
}

export default CityGame;