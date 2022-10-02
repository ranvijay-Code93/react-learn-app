import React, { useEffect, useState } from 'react';
import api from './apiConfig';
import { useNavigate ,useParams } from "react-router-dom";
function EditContact() {
    let navigate = useNavigate();
    let params = useParams();
    const [formValues, setFormValues] = useState({});

    const getContact=async (id)=>{
        
        const response = await api.get(`/users/${id}`);
        return response.data;
    }

    useEffect(()=>{
        
        const getUser = async () => {
            const user = await getContact(params.id);
            if (user) setFormValues(user);
        }
        getUser();
    },[params.id]);

    const handleChange = (e) => {
        
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
        
        EditUser(formValues);

        return true;
    }

    
    const EditUser = async (user) => {
        
        await api.put(`/users/${user.id}`, user);
        navigate('/axiosTest/contacts');
    }
    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h1>Edit Contact</h1><br />
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
export default EditContact;