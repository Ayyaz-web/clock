
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';



const App = () => {


    const [count, setCount] = useState(0);
    
    
    const IncNum = () =>{
      setCount(count+ 1);
    }
    const DecNum = () =>{
       if(count > 0){
       setCount(count- 1);
    } else {
        setCount(0);
        alert("Sorry, Zero limit reached")
    }
      }

    return (
      <>
      <div className="main_div">
        <div className="center_div">
        <h1>lets play</h1>
            <h1> {count} </h1> <br />
            <div className="btn_div">
            <button onClick={IncNum}><AddIcon />
            </button>
            <button onClick={DecNum}><DeleteIcon/></button>
            </div>
        </div>
      </div>
      </>
    )
    }
    
    export default App; 