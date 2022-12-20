import './App.css';
import Navbar from './components/Navbar';
import TextInput from './components/TextInput';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.background = 'white'
      showAlert('Dark Mode : Disabled', 'success')
    }
    else {
      setMode('dark')
      document.body.style.background = '#343a40'
      showAlert('Dark Mode : Enabled', 'success')
    }
  }
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <>
      <Router>
        <Navbar title="TextEdit" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/" element={<TextInput showAlert={showAlert} mode={mode} />} />
          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
