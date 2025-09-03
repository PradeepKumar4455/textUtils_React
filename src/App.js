import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert =(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
       setAlert (null);}, 1500);
  }
  const [mode, setMode] = useState('light');
  const toggleMode =()=>{
     if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='#192e40';
      showAlert("darkMode enable", "success");
      document.title ='TextUtils -Dark Mode';
     }
     else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("lightMode enable", "success");
      document.title ='TextUtils -Light Mode';
     }
  }
  return (
    
    <>
    <Router>
      <Navbar title="TextUtils" home1="Home" about1="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter your text here" mode={mode} />} />
        </Routes>
      </div>
   </Router>

    </>
  );
}


export default App;
