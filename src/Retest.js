import {useState} from 'react';
import Propstest from './PropsTest';

function Retest() {
    // let clickCount = "Ranvijay";
    const [clickCount,updateCount]=useState(0);
    return (
        <div>
            <div>Hello React retesting. {clickCount}</div>
            <button onClick={() => alert("Internal alert call")}>Internal click</button>
            <button onClick={functionCall}>Function call onclick</button>
            <Propstest clickCount={clickCount} testFunction ={CallPropsFunction} userName={"Ranvijay"} address={{state:"UP",city:"Noida"}} />
        </div>
    );
    function functionCall() {
        // clickCount="Aarush";
        updateCount(clickCount+1);
        // return alert(clickCount)
    }

    function CallPropsFunction(){
        alert("called from function passed in props")
    }
}
export default Retest;