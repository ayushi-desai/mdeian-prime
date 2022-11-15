import './App.css';
import { useState } from "react";

function App() {
  const [number, setNumber] = useState("");
  const [medianprime, setMedianPrime] = useState("");

  let handleSubmit = async (e) => {
    let finalNumber = number;
    finalNumber = finalNumber.replace(/[^0-9]/g, "")
    e.preventDefault();
    try {
      let res = await fetch(`http://localhost:3001/medianprimes?number=${finalNumber}`, {
        method: "GET",
      });
      const json = await res.json();
      if (res.status === 200) {
        setMedianPrime("Medain Prime of the " + number + " is: " + json.data.join(','));
        setNumber("");
      } else {
        setMedianPrime(json.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <header className="App-header"> Medain Prime Number App </header>
      <form>
        <input type="text" id="number" data-testid="number" onChange={e => setNumber(e.target.value)}></input>
        <button type="submit" id="sendbtn" data-testid="sendbtn" onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
      <p data-testid="medianprime" id="medianprime">{medianprime}</p>
    </div>
  );
}

export default App;
