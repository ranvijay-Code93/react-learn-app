import React,{useEffect,useRef} from "react";
function PrevPropsComp(props){
    let prevValue=useRef();
    useEffect(()=>{
        prevValue.current=props.count;
    })
    let previousProps=prevValue.current;
    return(
        <>
        <h2>Previous value: {props.count}</h2>
        <h2>Current value: {previousProps}</h2>
        </>
    );
}
export default PrevPropsComp;