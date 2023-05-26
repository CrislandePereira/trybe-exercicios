import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <label htmlFor="id-question">
        Pergunte
        <input id='id-question' type='text' placeholder='Digite uma pergunta' />
        </label>
        <button>Enviar</button>
      </header>
    </div>
  );
}

export default App;
