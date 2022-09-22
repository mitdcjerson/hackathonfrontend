import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/Login';
import Contribute from './components/Contribute';
import Navigation from './components/Navigation';
import Home from './components/Home';
import { useState } from 'react';
import { render } from '@testing-library/react';


function App() {

  const [page, setPage] = useState("home");

  const renderPage = (page) => {
    
    if (page === "home") {
      return <Home />
    }
    else if (page === "contribute") {
      return <Contribute />
    }
    else if (page === "login") {
      return <Login />
    }

  };

  return (
    <>
    <Navigation setPage={setPage}/>
      {
        renderPage(page)
      }
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

  );
}

export default App;
