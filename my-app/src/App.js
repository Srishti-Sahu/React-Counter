import React, {useState} from 'react';
import './index.css';
function App(){
        const [count, setCount] = useState(0);
        function increaseValue(){
            setCount(count+1);
        }
        function decreaseValue(){
            setCount(count-1);
        }
        return (
            <div>
                <h1>{count}</h1>
                <button onClick={increaseValue} id='button1' className='something' style={{fontFamily: 'cursive'}}>Increase</button>
                <button onClick={decreaseValue} id='button2' className = 'something' style={{fontFamily: 'cursive'}}>Decrease</button>
            </div>
        );
    }
    
    export default App;