import './App.css';

import { Jumbotron, Container, Button } from 'react-bootstrap'
import NavBar from './components/Navbar.js'
import Footer from './components/Footer.js'

import pos_icon from './posist-symbol-icon.png'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Jumbotron className="pos-hero">
        <Container className="pos-container">
          <h1>Posist POS </h1>
          <p>
            Kick-start your next restaurant with Posist.
          </p>
          <img src={pos_icon} alt="Posist POS"></img>
        </Container>
      </Jumbotron>
      <Footer />
      <Button className="pos-help-btn">Need Help</Button>
    </div>
  );
}

export default App;
