import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

class Root extends React.Component {
  render() {
    var arr1 = []; {
      for ( var N = 0, t = 6; N < 10; N++ )
        arr1.push( Math.round( Math.random() * t+4));
    }
    document.write(arr1);

    return (
        <div />
    )
  }
}

----------------------------------------------

var arr10 = new Array();
for ( var N = 0, t = 6; N < 10; N++ )
  arr10.push( Math.round( Math.random() * t+4))
  ;

var sim = [];

var arr = new Array (arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9, arr10);
for (var i=0; i < arr.length; i++) {
  for (var j = 0; j < arr[i].length; j++)
  { {if(arr1[i] > 8 ){
    sim.push(arr1[i]);
  }}
    document.write(arr[i][j] + " ");
  }

  document.write("<br />");
}

document.write(sim[i][j]);