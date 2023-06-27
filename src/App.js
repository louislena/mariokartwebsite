import { Button, ButtonGroup, Spinner } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';

function App() {

  const [spin, setSpin] = useState(false)



  return (
    <div className="App">
      <h1 className='Header'>Welcome</h1>
      <br />
      <br />
      <Button variant='warning'>hello i am useless</Button>
      <br />
      <ButtonGroup aria-label="Basic example">
        <Button variant="light">Hei</Button>
        <Button onClick={() => setSpin(!spin)} variant="danger">Velkommen</Button>
        <Button href='https://www.bt.no' variant="info">Nyheter</Button>
      </ButtonGroup>
      <br />
      <br />
      <a href='https://www.bt.no'>
        <img className='BergensTidendeLogo' src='https://statisk.bt.no/logo/BT_ShareImage_Blue.jpg'></img>
      </a>
      <br />
      <img className='ImageRose' src='https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSAGPbjEEPCpSnwvmura8ARSyCJg-otGamF2T17JFpTkGgqZuGJzGxpMY606YpQyGnk'></img>
      <br />
      <h2>hello</h2>
      {spin && <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>}

    </div>
  );
}

export default App;
