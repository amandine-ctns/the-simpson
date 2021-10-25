import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
import DisplaySimpson from './components/QuoteCard';

const arrayQuote = {
  "quote": "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
  "character": "Homer Simpson",
  "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
  "characterDirection" : "Right"
}


function App() {
  const [quote, setQuote] = React.useState(arrayQuote);
  // déclaration variable d'état

  const getSimpson = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // récuperation 1 citation via api
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setQuote(data[0]);
        // console.log(data[0]);
      });
    };

  return (
    <div>
     <button type="button" onClick={getSimpson}>Get Simpson</button>
          <DisplaySimpson quote={quote} />
    </div>
  );
}

export default App;
 