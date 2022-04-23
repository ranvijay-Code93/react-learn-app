import React, { useState } from "react";
function PrevTest() {
    const [count, setCount] = useState(1);
    function testPreviousState() {
        // let updatedNum = Math.floor(Math.random() * 10);
        // setCount((prev) => {
        //     console.warn(prev);
        //     if(prev<5){
        //         alert("previous number was having low value");
        //     }
        //     return updatedNum;
            
        // });

        // let newNum=count;
        for(let i=0;i<5;i++){
            // newNum++;

            // Update state inside loop using previous state
            setCount((prev)=>{return prev+1});

            // If we normally update state inside then it will not work 
            // setCount(count+1);
        }
        // setCount(newNum);
    }
    return (
        <>
            <h2>Testing previous state ...</h2>
            <h2>current state: {count}</h2>
            <button onClick={() => testPreviousState()}>Check Previous State</button>
        </>
    );
}
export default PrevTest;