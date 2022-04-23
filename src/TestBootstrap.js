import React from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
function TestBootstrap() {
    const students = ['ranvijay', 'shubham', 'shivam', 'ravi'];

    const users = [{ name: 'ranvijay', city: 'noida', contact: '123456789' },
    { name: 'shubham', city: 'noida', contact: '123456789' },
    { name: 'shivam', city: 'noida', contact: '123456789' },
    { name: 'ravi', city: 'noida', contact: '123456789' }];

    const userWithAddress = [{
        name: 'ranvijay', age: 29, contact: '123456789', address: [{ H_No: 11, city: 'noida', state: 'U.P' },
        { H_No: 12, city: 'noida', state: 'U.P' }, { H_No: 13, city: 'noida', state: 'U.P' }]
    },
    {
        name: 'shubham', age: 26, contact: '123456789', address: [{ H_No: 21, city: 'noida', state: 'U.P' },
        { H_No: 22, city: 'noida', state: 'U.P' }, { H_No: 23, city: 'noida', state: 'U.P' }]
    },
    {
        name: 'shivam', age: 22, contact: '123456789', address: [{ H_No: 31, city: 'noida', state: 'U.P' },
        { H_No: 32, city: 'noida', state: 'U.P' }, { H_No: 33, city: 'noida', state: 'U.P' }]
    },
    {
        name: 'ravi', age: 21, contact: '123456789', address: [{ H_No: 41, city: 'noida', state: 'U.P' },
        { H_No: 42, city: 'noida', state: 'U.P' }, { H_No: 43, city: 'noida', state: 'U.P' }]
    }];

    return (
        <>
            <h2>Testing react-bootstrap styles...</h2>
            <Button variant="success">Test Names</Button>
            <h2>Testing array..</h2>
            {
                students.map((item, index) => {
                    return (
                        <h2 key={index}>{item}</h2>)
                })
            }
            <h2>Testing array of objects..</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item, index) =>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.city}</td>
                                <td>{item.contact}</td>
                            </tr>
                        )

                        // for loop can not be used inside return because it shows error
                        // for(let i=0;i<students.length;i++){
                        //     <h2>{students[i]}</h2>
                        // }
                    }
                </tbody>
            </Table>
            <h2>Testing nested array..</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Contact</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userWithAddress.map((item, index) =>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.contact}</td>
                                <td>
                                    <Table striped bordered hover variant="dark">
                                        <tbody>
                                            {
                                                item.address.map((address, addIndex) =>
                                                    <tr key={addIndex}>
                                                        <td>{address.H_No}</td>
                                                        <td>{address.city}</td>
                                                        <td>{address.state}</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </Table>
                                </td>
                            </tr>
                        )

                        // for loop can not be used inside return because it shows error
                        // for(let i=0;i<students.length;i++){
                        //     <h2>{students[i]}</h2>
                        // }
                    }
                </tbody>
            </Table>
        </>
    )
}
export default TestBootstrap;