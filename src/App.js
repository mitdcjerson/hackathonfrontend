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

  );
}

export default App;
