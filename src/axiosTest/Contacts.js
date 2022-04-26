import React, { useEffect, useState } from 'react';
import api from './apiConfig';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
function Contacts() {

    const [users, setUsers] = useState([]);
    const getContacts = async () => {
        const response = await api.get('/users');
        return response.data;
    }

    useEffect(() => {
        const getAllUsers = async () => {
            const allUsers = await getContacts();
            if (allUsers) setUsers(allUsers);
        }
        getAllUsers();
    }, []);

    const removeContactHandler= async (id)=>{
        await api.delete(`/users/${id}`);
        const newUserList=users.filter((item)=>{
            return item.id!==id;
        })
        setUsers(newUserList);
    };

    return (
        <>
            <h2>Contact List <span><Link className="btnTab" to='/axiosTest/contacts/add'><Button variant="primary">Add Contact</Button></Link></span></h2>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>Sr.No.</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>City</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((item,index) =>
                            <tr key={item.id}>
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.city}</td>
                                <td colSpan={2}><Link className="btnTab" to={`/axiosTest/contacts/${item.id}`} key={item.id}><Button variant="warning">Edit</Button></Link>  
                                <Button onClick={()=>removeContactHandler(item.id)} variant="danger">Delete</Button></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>

        </>
    )
}
export default Contacts;