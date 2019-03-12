import React, {Component} from 'react';
import './App.css';
import Typo from './components/Typo';

class App extends Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <Typo tag="h1" color="white">
            JuzTalent 3.0 - CMS
          </Typo>
          <a
            className="App-link"
            href="https://juztalent.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Us
          </a>
        </header>
      </div>
    );
  }
}

export default App;
