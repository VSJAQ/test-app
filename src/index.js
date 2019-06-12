import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class Root extends React.Component {
    render() {
        var arr1 = new Array();
        for ( var N = 0, t = 6; N < 10; N++ )
            arr1.push( Math.round( Math.random() * t+4))
            ;

        var arr2 = new Array();
        for ( var N = 0, t = 6; N < 10; N++ )
            arr2.push( Math.round( Math.random() * t+4))
        ;

        var arr3 = new Array();
        for ( var N = 0, t = 6; N < 10; N++ )
            arr3.push( Math.round( Math.random() * t+4))
        ;

        var arr4 = new Array();
        for ( var N = 0, t = 6; N < 10; N++ )
            arr4.push( Math.round( Math.random() * t+4))
            ;

        var arr5 = new Array();
        for ( var N = 0, t = 6; N < 10; N++ )
            arr5.push( Math.round( Math.random() * t+4))
            ;

        var arr6 = new Array();
        for ( var N = 0, t = 6; N < 10; N++ )
            arr6.push( Math.round( Math.random() * t+4))
            ;

        var arr7 = new Array();
        for ( var N = 0, t = 6; N < 10; N++ )
            arr7.push( Math.round( Math.random() * t+4))
            ;

        var arr8 = new Array();
        for ( var N = 0, t = 6; N < 10; N++ )
            arr8.push( Math.round( Math.random() * t+4))
            ;

        var arr9 = new Array();
        for ( var N = 0, t = 6; N < 10; N++ )
            arr9.push( Math.round( Math.random() * t+4))
            ;

        var arr10 = new Array();
        for ( var N = 0, t = 6; N < 10; N++ )
            arr10.push( Math.round( Math.random() * t+4))
            ;

        var arr = new Array (arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9, arr10);
        for (var i=0; i < arr.length; i++) {
            for (var j = 0; j < arr[i].length; j++)
            {
                document.write(arr[i][j] + " ");
            }

            document.write("<br />");
        }

        let sim = arr1.filter(function (item) {
            return item > 8;
        });

        document.write(sim);

        return (
            <div />
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
