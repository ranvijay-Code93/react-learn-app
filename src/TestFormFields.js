import React,{useState} from "react";
function TestFormFields() {
    const [name,setName]=useState("");
    const [city,setCity]=useState("");
    const [tnc,setTnC]=useState(true);

    const handlerTestFormSubmit = (e) => {
        console.warn(name,city,tnc);
        e.preventDefault();
    }
    return (
        <>
            <h2>Testing form fields...</h2>
            <form onSubmit={(e)=>handlerTestFormSubmit(e)}>
                <input type="text" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/><br /><br />
                <select onChange={(e)=>setCity(e.target.value)}>
                    <option>Selct City</option>
                    <option>Noida</option>
                    <option>Delhi</option>
                    <option>Gurugram</option>
                </select><br /><br />
                <input type="checkbox" checked = {tnc} onChange={(e)=>setTnC(e.target.checked)}/><span>Accept terms and conditions.</span>
                <br/><br/><button type="submit">Submit</button>
            </form>
        </>
    )
}
export default TestFormFields;