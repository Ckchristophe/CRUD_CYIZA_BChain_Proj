import Form from 'react-bootstrap/Form';
import { P1_backend } from 'declarations/P1_backend';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Update(){
    const [firstname, setFirstname] = useState([]);
    const [lastname, setLastname] = useState([]);
    
    const {id} = useParams();
    let id2 = parseInt(id, 10);

    const handleSubmit = async (e) =>{

        const data = {
            firstname: firstname,
            lastname: lastname
        }

        P1_backend.create(data).then((result) => {
            //setGreeting(greeting);
            console.log(result)
            alert("Success To Add New User");
            window.location.href='/';
          });
          
    };
    return(
    <>
    <div>Update User</div>
    <Form> 
      <Form.Group className="mb-3" >
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name='firstname' value={firstname} onChange={(e)=> setFirstname(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" name='lastname' value={lastname} 
        onChange={(e)=> setLastname(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit}>Submit</Button>
    
    </Form>
    </>
    )
    
}

