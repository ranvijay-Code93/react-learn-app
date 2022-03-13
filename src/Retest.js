import {useState,useEffect} from 'react';
import Propstest from './PropsTest';

function Retest() {
    // let clickCount = "Ranvijay";
    const [clickCount,updateCount]=useState(0);
    const [dataTotal,updateData]=useState(50);
    useEffect(()=>{
        console.warn("______useEffect data__________");
    },[dataTotal]);
    useEffect(()=>{
        console.warn("______useEffect click");
    },[clickCount]);
    return (
        <div>
            <div>Hello React retesting. Click count : {clickCount} and Data total : {dataTotal}</div>
            <button onClick={() => alert("Internal alert call")}>Internal click</button>
            <button onClick={functionCall}>Function call onclick</button>
            <button onClick={()=>updateData(dataTotal+10)}>Test data</button>
            <Propstest clickCount={clickCount} dataTotal={dataTotal} testFunction ={CallPropsFunction} userName={"Ranvijay"} address={{state:"UP",city:"Noida"}} />
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