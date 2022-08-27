import imageRickMorty from "./img/png-transparent-rick-morty-illustration-rick-sanchez-morty-smith-rick-and-morty-season-3-television-show-adult-swim-rick-and-morty-television-child-face.png"
import './App.css';
import {useState} from 'react';
import Characters from "./components/Characters";

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () =>{
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();
    setCharacters(characterApi.results)
    // console.log("Clicking");
    //console.log(api)
    //console.log(characterApi)
  }
  //console.log(characters)
  return (
    <div className="App">
      <header className="App-header">
       <h1 className="title">Rick & Morty</h1>
       {characters ? (
       <Characters characters={characters} setCharacters={setCharacters}/>
       ) : (
       <>
        <img src={imageRickMorty} alt="Rick & Morty" className="img-home"/>
       <button onClick={reqApi} className="btn-search">Buscar Personajes</button>
       </>
       )}
      </header>
    </div>
  );
}

export default App;
