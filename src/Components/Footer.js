import React,{useContext} from "react";
import { CommonContext } from "./ParentComponent";
function Footer(){
    const footerConsumer=useContext(CommonContext)
    return(
        <>
        <h2 style={{backgroundColor:footerConsumer.color}}>This is footer page...</h2>
        <button onClick={()=>footerConsumer.updateColor("blue")}>Update Color to blue</button>
        </>
    )
}
export default Footer