import { useMemo, useState } from "react";

function UseMemoTest(){
    const [count,setCount]=useState(0);
    const [item,setItem]=useState(10);
    const multiCount=useMemo(()=>{
        console.warn("calling multicount");
        // alert(count);
        return count+10;
    },[count]);
    return(
        <>
            <h1>useMemo hooks in react:</h1>
            <h2>Count: {count}</h2>
            <h2>Item: {item}</h2>
            <h2>{multiCount}</h2>
            <button onClick={() => setCount(count + 10)}>Update Count</button>
            <button onClick={() => setItem(item + 10)}>Update Item</button>
        </>
    );
}
export default UseMemoTest;