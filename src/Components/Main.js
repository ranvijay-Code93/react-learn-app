import React,{ useContext } from "react";
import { CommonContext } from "./ParentComponent";

function Main(){
    const mainConsumer=useContext(CommonContext)
    return(
        <>
            <h2 style={{backgroundColor:mainConsumer.color}}>This is main page content</h2>
            <button onClick={()=>mainConsumer.updateColor("red")}>Update Color to red</button>
        </>
    );
}
export default Main;