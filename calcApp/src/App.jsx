import { useState } from 'react'
import './App.css'

function App() {

  let [number, setNumber] = useState(0);

  let [number1, setNumber1] = useState(0);

  let [number2, setNumber2] = useState(0);

  let sum = () => setNumber(Math.round(number1 + number2));


  let rest = () => setNumber(Math.round(number1 - number2));

  let div = () => { return (number2 != 0) ? setNumber(Math.round(number1 / number2)) : setNumber(<b>Not divisible by Zero</b>) };

  let multi = () => setNumber(Math.round(number1 * number2));

  return (
    <>
      <div id='app'>
        <div className='calc'>
          <section className="title">
            <span className='subtitle'>Calculator</span>
          </section>
          <section className="display">
            <div className="curr-operation">
              <span className='number-display' id="main-display">{number}</span>
            </div>
          </section>
          <div className="row mb-3">
            <div className='col ml-3'>
              <input type='number' className='form-control' onChange={() => setNumber1(Number(document.getElementById('number1').value))} id='number1' pattern="[^()/><\][\\\x22,;|]+" maxLength={6} required />
            </div>
            <div className='col mr-3'>
              <input type='number' className='form-control' onChange={() => setNumber2(Number(document.getElementById('number2').value))} id='number2' pattern="[^()/><\][\\\x22,;|]+" maxLength={6} required />
            </div>
          </div>
          <section class="buttons">
            <div class="btn" onClick={sum}>+</div>
            <div class="btn" onClick={rest}>-</div>
            <div class="btn" onClick={multi}>*</div>
            <div class="btn" onClick={div}>/</div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
