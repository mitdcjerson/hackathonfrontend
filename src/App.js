import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/Login';
import Contribute from './components/Contribute';
import Navigation from './components/Navigation';
import Home from './components/Home';
import { useState } from 'react';
import { render } from '@testing-library/react';
import { Routes, Route, Navigate } from 'react-router-dom';


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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        {/* <Route path="/doctor/:id" element={<DoctorProfile doctorId={doctor.id} doctorName={doctor.name}/>} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/contribute" element={<Contribute />} />
      </Routes>
    
    </>

  );
}

export default App;
