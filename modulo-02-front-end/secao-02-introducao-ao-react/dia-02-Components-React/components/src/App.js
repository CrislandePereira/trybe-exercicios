import './App.css';
import React from 'react';
import Greeting from './Greeting';

class App extends React.Component {
  render() {
    return (
      <main>
        <Greeting name="Cris" lastName="Pereira" />
      </main>
    );
  }
}

export default App;

