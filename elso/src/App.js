import './App.css';
import Kartya from './components/Kartya';
import { lista } from './adatlista';
import Kartyak from './components/Kartyak';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        Első App
     
      </header>
      <article>
        <Kartyak lista={lista}/>
       

        


      </article>
      <footer>Szalóki Klaudia</footer>
    </div>
  );
}

export default App;
