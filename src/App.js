import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        var arr2 = [];
        for ( var i = 0; i < 20; i++ ) {
        arr2.push( Math.round( Math.random() * 100));
        }
        document.write( '<br>' + arr2);
      </header>
    </div>
  );
}

export default App;
