import React, { useRef } from 'react';
import TestUseRef from './TestUseRef';
function TestNew() {
    let inputRef = useRef(null);
    let inputForRef = useRef(null);
    function testRefs() {
        inputRef.current.value = 1000;
        inputRef.current.style.color = "red";
        inputRef.current.focus();
    }
    function handleforwardRefInput() {
        inputForRef.current.value = 2000;
        inputForRef.current.style.color = "blue";
        inputForRef.current.focus();
    }
    return (
        <>
            <h2>Hello checking useRef...</h2>
            <input type="text" ref={inputRef} />
            <button onClick={testRefs}>Test Refs</button>
            <TestUseRef ref={inputForRef} />
            <button onClick={handleforwardRefInput}>Test forward ref</button>
        </>
    )
}
export default TestNew;