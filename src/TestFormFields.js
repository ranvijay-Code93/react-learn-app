import React,{useState} from "react";
function TestFormFields() {
    const [name,setName]=useState("");
    const [city,setCity]=useState("");
    const [tnc,setTnC]=useState(false);
    const [nameError,setNameError]=useState(false);
    const [tncError,setTnCError]=useState(false);

    const handlerTestFormSubmit = (e) => {
        console.warn(name,city,tnc);
        e.preventDefault();
        let valid=true;
        if(name===""){
            setNameError(true);
            valid=false;
        }
        if(!tnc){
            setTnCError(true);
            valid=false;
        }
        if(valid){
            alert("form is valid");
            setNameError(false);
            setTnCError(false);
            return true;
        }
        else{
            alert("form is invalid");
            return false;
        } 
    }
    return (
        <>
            <h2>Testing form fields...</h2>
            <form onSubmit={handlerTestFormSubmit}>
                <input type="text" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/><br />
                {nameError ? <span style={{color:"red"}}>Please enter your Name!</span>: null}<br />
                <select onChange={(e)=>setCity(e.target.value)}>
                    <option>Selct City</option>
                    <option>Noida</option>
                    <option>Delhi</option>
                    <option>Gurugram</option>
                </select><br /><br />
                <input type="checkbox" checked = {tnc} onChange={(e)=>setTnC(e.target.checked)}/><span>Accept terms and conditions.</span>
                <br/>
                {tncError ? <span style={{color:"red"}}>Please accept terms and coonditions!</span>: null}<br />
                <br/><button type="submit">Submit</button>
            </form>
        </>
    )
}
export default TestFormFields;