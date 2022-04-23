import React,{useState} from "react";
import PrevPropsComp from "./PrevPropsComp";
function PrevPropsTest(){
    const [count,setCount]=useState(1);
    return(
        <>
        <h2>Testing previous props...</h2>
        <PrevPropsComp count={count} />
        <button onClick={()=>setCount(Math.floor(Math.random()*10))}>Update Counter</button>
        </>
    );
}
export default PrevPropsTest;