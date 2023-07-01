import { Button, ButtonGroup, Spinner } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';

function App() {

  const playerNumbers = [1,2,3,4]

  const trackNumbers = [4,6,8,12,16,24,32,48]

  const characterImg = [
    "a",
    "b"
  ]

  const defaultPlayer = new Array(4).fill("outline-danger")

  const defaultTrack = new Array(8).fill("outline-danger")

  const [playerActive, setPlayerActive] = useState(defaultPlayer)

  const [trackActive, setTrackActive] = useState(defaultTrack)

  function changeActivePlayer(number){
    var an = [...defaultPlayer]
    an[number] = "success"
    setPlayerActive(an)
  }

  function changeActiveTrack(number){
    var an = [...defaultTrack]
    an[number] = "success"
    setTrackActive(an)
  }

  return (
    <div className="App">
      <h1 className='Header'>Mario Cart Randomizer</h1>
      <br />
      <p>Please select number of players, number of rounds and the items you would like to use</p>
      <br />
      <br />
      <h2>Number of players</h2>
      <ButtonGroup aria-label="Number of player buttons"> 
        {playerNumbers.map((x,index) => <Button key={x} onClick={() => changeActivePlayer(index)} variant={playerActive[index]} size="lg">{x}</Button>)}
      </ButtonGroup>
      <br />
      <br />
      <h2>Number of maps</h2>
      <ButtonGroup aria-label="Number of player buttons"> 
        {trackNumbers.map((x,index) => <Button key={x} onClick={() => changeActiveTrack(index)} variant={trackActive[index]} size="lg">{x}</Button>)}
      </ButtonGroup>
      <br />

    </div>
  );
}

export default App;


{/*      <ButtonGroup aria-label="Basic example">
        <Button variant="light">Hei</Button>
        <Button onClick={() => test()} variant="danger">Velkommen</Button>
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
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
  </Spinner>*/}