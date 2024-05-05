import './App.css';
import {Gallery} from './Gallery';
import {Button} from './Button';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
        /* <img src={logo} className="App-logo" alt="logo" /> */
        /* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */
      // </header>
      // </div>
      <div>
        <Gallery/>
        <Button message="This is an alert!">
          Click me for alert!
        </Button>
      </div>
  );
}

export default App;
