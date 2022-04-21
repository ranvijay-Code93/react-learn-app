import React,{useContext} from "react";
import { CommonContext } from "./ParentComponent";
function Header(){
    const headerConsumer=useContext(CommonContext)
    return(
        <>
        <h2 style={{backgroundColor:headerConsumer.color}}>This is header page...</h2>
        <button onClick={()=>headerConsumer.updateColor("green")}>Update Color to green</button>
        </>
    )
}
export default Header