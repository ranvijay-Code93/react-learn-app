import {useState,useEffect,useCallback} from 'react';
import Propstest from './PropsTest';

function Retest() {
    const [clickCount,updateCount]=useState(0);
    const [dataTotal,updateData]=useState(50);
    useEffect(()=>{
        console.warn("______useEffect data__________");
    },[dataTotal]);
    useEffect(()=>{
        console.warn("______useEffect click");
    },[clickCount]);
    const testChildToParent= useCallback((data)=>{
        console.warn("Callback function is called");
        alert(data);
    },[]);
    const callPropsFunction = useCallback(() => {
        console.warn("Refrence function called");
        alert("called from function passed in props")
    }, []);
    function functionCall() {
        updateCount(clickCount+1);
    }
    return (
        <>
            <div>Hello React retesting. Click count : {clickCount} and Data total : {dataTotal}</div>
            <button onClick={() => alert("Internal alert call")}>Internal click</button>
            <button onClick={functionCall}>Function call onclick</button>
            <button onClick={()=>updateData(dataTotal+10)}>Test data</button>
            <Propstest dataTotal={dataTotal} testFunction={callPropsFunction} testChildToParent={testChildToParent}/>
        </>
    );
}
export default Retest;