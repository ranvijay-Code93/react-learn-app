import React from "react";
import { forwardRef } from "react";

function TestUseRef(props, inputForRef) {
    return(
    <>
        <input type="text" ref={inputForRef} />
    </>
    );
}
export default forwardRef(TestUseRef);