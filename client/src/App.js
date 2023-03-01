import './App.css';
import { useEffect, useState } from 'react';
import Card from "./components/card";
function App() {
  const [card, setCards] = useState([]);
  const load_cards = async () => {

    const response = await fetch("http://localhost:5000/cards", {
      "method": "GET"
    })

    const json = await response.json();

    if (json.success) {
      console.log(json.cards);
      setCards(json.cards);
    }
  }

  useEffect(() => {
    load_cards();
  }, [])
  return (
      <div className="container d-flex">
      <div className="row justify-content-center align-items-center">
        {
          card.map((item,indx) => {
            return (
              <div key={indx} className="m-1 col-lg-4 mt-0" style={{"width": "23rem", "height" : "25rem", "border" : "0"}}>
              <Card item={item}/>
              </div>
            );
          })
        }
        </div>
      </div>
  );
}

export default App;
