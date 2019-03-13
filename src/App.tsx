import React, {Component} from 'react';
import './App.css';
import Button, {ButtonVariants} from './components/Button';

class App extends Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button>AA</Button>
          <Button variant={ButtonVariants.Secondary}>AA</Button>
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
