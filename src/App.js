import { Button, ButtonGroup, Spinner } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';

function App() {

  const [spin1, setSpin1] = useState("outline-danger")

  const [spin2, setSpin2] = useState("outline-danger")

  const [spin3, setSpin3] = useState("outline-danger")

  const [spin4, setSpin4] = useState("outline-danger")


  function test1() {
    if (spin1 === "outline-danger") {
      setSpin1("success")
      setSpin2("outline-danger")
      setSpin3("outline-danger")
      setSpin4("outline-danger")
    }
    else
      setSpin1("outline-danger")
  }

  function test2() {
    if (spin2 === "outline-danger"){
      setSpin2("success")
      setSpin3("outline-danger")
      setSpin4("outline-danger")
      setSpin1("outline-danger")
    }
    else
      setSpin2("outline-danger")
  }

  function test3() {
    if (spin3 === "outline-danger"){
      setSpin3("success")
      setSpin4("outline-danger")
      setSpin1("outline-danger")
      setSpin2("outline-danger")
    }
    else
      setSpin3("outline-danger")
  }

  function test4() {
    if (spin4 === "outline-danger"){
      setSpin4("success")
      setSpin1("outline-danger")
      setSpin2("outline-danger")
      setSpin3("outline-danger")
    }
    else
      setSpin4("outline-danger")
  }

  const [spinmap4, setmap4] = useState("outline-danger")

  const [spinmap6, setmap6] = useState("outline-danger")

  const [spinmap8, setmap8] = useState("outline-danger")

  const [spinmap12, setmap12] = useState("outline-danger")

  const [spinmap16, setmap16] = useState("outline-danger")

  const [spinmap24, setmap24] = useState("outline-danger")

  const [spinmap32, setmap32] = useState("outline-danger")

  const [spinmap48, setmap48] = useState("outline-danger")


  function map4() {
    if (spinmap4 === "outline-danger") {
      setmap4("success")
    }
    else
      setmap4("outline-danger")
  }

  function map6() {
    if (spinmap6 === "outline-danger"){
      setmap6("success")
    }
    else
      setmap6("outline-danger")
  }

  function map8() {
    if (spinmap8 === "outline-danger"){
      setmap8("success")
    }
    else
      setmap8("outline-danger")
  }

  function map12() {
    if (spinmap12 === "outline-danger"){
      setmap12("success")
    }
    else
      setmap12("outline-danger")
  }

  function map16() {
    if (spinmap16 === "outline-danger"){
      setmap16("success")
    }
    else
      setmap16("outline-danger")
  }

  function map24() {
    if (spinmap24 === "outline-danger"){
      setmap24("success")
    }
    else
      setmap24("outline-danger")
  }

  function map32() {
    if (spinmap32 === "outline-danger"){
      setmap32("success")

    }
    else
      setmap32("outline-danger")
  }

  function map48() {
    if (spinmap48 === "outline-danger"){
      setmap48("success")
    }
    else
      setmap48("outline-danger")
  }

  return (
    <div className="App">
      <h1 className='Header'>Mario Cart Randomizer</h1>
      <br />
      <p>Please select number of players, number of rounds and the items you would like to use</p>
      <br />
      <br />
      <h2>Number of players</h2>
      <ButtonGroup aria-label="Basic example"> 
        <Button onClick={() => test1()} variant={spin1} size="lg">1</Button>
        <Button onClick={() => test2()} variant={spin2} size="lg">2</Button>
        <Button onClick={() => test3()} variant={spin3} size="lg">3</Button>
        <Button onClick={() => test4()} variant={spin4} size="lg">4</Button>
      </ButtonGroup>
      <br />
      <br />
      <h2>Number of maps</h2>
      <ButtonGroup aria-label="Basic example"> 
        <Button onClick={() => map4()} variant={spinmap4} size="lg">4</Button>
        <Button onClick={() => map6()} variant={spinmap6} size="lg">6</Button>
        <Button onClick={() => map8()} variant={spinmap8} size="lg">8</Button>
        <Button onClick={() => map12()} variant={spinmap12} size="lg">12</Button>
        <Button onClick={() => map16()} variant={spinmap16} size="lg">16</Button>
        <Button onClick={() => map24()} variant={spinmap24} size="lg">24</Button>
        <Button onClick={() => map32()} variant={spinmap32} size="lg">32</Button>
        <Button onClick={() => map48()} variant={spinmap48} size="lg">48</Button>
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