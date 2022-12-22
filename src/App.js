import './App.css';
import React from 'react'
import NavBar from './Components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import Public from './Routes/Public';
import Container from 'react-bootstrap/Container'
import { useState } from 'react'


function App() {
  const [login, setLogin] = useState(false)
  return (
   <div className="App">
    <Router>
      <NavBar login={login} />
        <Container>
          <Public setLogin={setLogin} login={login} />
        </Container>
    </Router>
   </div>
  );
}

export default App;
