import imageRickMorty from "./img/58f37720a4fa116215a9240f.png"
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
       {characters ? (
       <Characters characters={characters} setCharacters={setCharacters}/>
       ) : (
       <>
       <img src={imageRickMorty} alt="Rick&Morty" className="img-home"></img>
       <button onClick={reqApi} className="btn-search">Buscar Personajes</button>
       </>
       )}
      </header>
    </div>
  );
}

export default App;
