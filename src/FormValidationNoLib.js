import React, { useState } from "react";
function FormValidationNoLib() {
    const initialValues={userName:"",email:"",password:""};
    const [formValues,setFormValues]=useState(initialValues);
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormValues({...formValues, [name]:value});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setFormErrors(handleValidateForm((formValues)));
        setIsSubmit(true);
    }
    const handleValidateForm=(values)=>{
        const errors={};
        const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.userName){
            errors.userName="Username is required!";
        }
        if(!values.email){
            errors.email="Email is required!";
        }
        else if(!regex.test(values.email)){
            errors.email="Email is not in valid format!";
        }
        if(!values.password){
            errors.password="Password is reuired!";
        }
        else if(values.password.length<4 || values.password.length>8){
            errors.password="Password length should be between 4 to 8 !"
        }
        return errors;
    }
    return (
        <>
            <h2>Learn form validation without using any library and state for any fields...</h2>
            <div className="container">
                {
                    Object.keys(formErrors).length===0 && isSubmit && <div>Form validation passed.</div>
                }
                <form onSubmit={handleSubmit}>
                    <h1>Test Login Form</h1><br />
                    <label>Username</label><br/>
                    <input type="text" name="userName" placeholder="Username" value={formValues.userName} onChange={handleChange}/><br/>
                    <p>{formErrors.userName}</p>
                    <label>Email</label><br/>
                    <input type="text" name="email" placeholder="Email" value={formValues.email} onChange={handleChange}/><br/>
                    <p>{formErrors.email}</p>
                    <label>Password</label><br/>
                    <input type="text" name="password" placeholder="Password" value={formValues.password} onChange={handleChange}/><br/>
                    <p>{formErrors.password}</p>
                    <br/><button>Submit</button>
                </form>
            </div>

        </>
    )

}
export default FormValidationNoLib;