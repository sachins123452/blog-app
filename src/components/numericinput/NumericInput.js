import React, { useState } from 'react';
// import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.

  function increment() {
    //setCount(prevCount => prevCount+=1);
    setCount(function (prevCount) {
      let p = parseInt(prevCount);

      return (p += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }

  return (
    <div style={{ backgroundClip: 'green' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          width: '100px',
          height: '35px',
          padding: '1px',
          justifyContent: 'center'
        }}
      >
        <button
          style={{
            width: '25px',
            position: 'absolute',
            left: '-10px',
            backgroundColor: '#E5F1F8',
            border: '0px solid #E5F1F8',
            color: '#0174BF',
            height: '25px',
            borderRadius: '5px'
          }}
          onClick={decrement}
        >
          -
        </button>
        <input
          type="text"
          value={count}
          onChange={(e) => {
            setCount(e.target.value);
          }}
          style={{
            borderRadius: '5px',
            backgroundColor: '#E5F1F8',
            padding: '3px 5px',
            margin: '0px',
            display: 'flex',
            color: '#0174BF',
            position: 'absolute',
            left: '18px',
            width: '50px',
            alignItems: 'center',
            justifyContent: 'center',
            border: '0px',
            textAlign: 'center'
          }}
        />

        <button
          style={{
            width: '25px',
            backgroundColor: '#E5F1F8',
            position: 'absolute',
            right: '4px',
            color: '#0174BF',
            border: '0px solid #E5F1F8',
            height: '25px',
            borderRadius: '5px'
          }}
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
}
