import React, { useState } from 'react';
import api from './apiConfig';
import { useNavigate  } from "react-router-dom";
function AddContact() {
    const initialValues = { name: "", age: 0, city: "" };
    const [formValues, setFormValues] = useState(initialValues);
    let navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
        
        AddUser(formValues);

        return true;
    }

    const AddUser = async (user) => {
        
        const userData = { ...user, id: Math.floor(Math.random() * 100) }
        await api.post('/users', userData);
        navigate('/axiosTest/contacts');
    }
    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h1>Add Contact</h1><br />
                    <label>Name</label><br />
                    <input type="text" name="name" placeholder="Name" value={formValues.name} onChange={handleChange} /><br />

                    <label>Age</label><br />
                    <input type="number" name="age" placeholder="Age" value={formValues.age} onChange={handleChange} /><br />

                    <label>City</label><br />
                    <input type="text" name="city" placeholder="City" value={formValues.city} onChange={handleChange} /><br />

                    <br /><button>Submit</button>
                </form>
            </div>
        </>
    )
}
export default AddContact;