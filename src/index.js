import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  const x = 5;

  if (x > 0) {
    return (
      <div
        style={{
          backgroundColor: 'green',
          margin: '20px 20px',
        }}
      ></div>
    );
  } else {
    return (
      <div
        style={{
          backgroundColor: 'red',
          margin: '20px 20px',
        }}
      ></div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

