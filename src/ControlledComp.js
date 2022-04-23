import React, { useState } from "react";
function ControlledComp() {
    let [name, setName] = useState("")
    return (
        <>
            <h2>Testing controlled components...</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </>
    )
}
export default ControlledComp;