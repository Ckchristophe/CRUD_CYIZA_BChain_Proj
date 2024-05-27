import { useEffect, useState } from 'react';
import { P1_backend } from 'declarations/P1_backend';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';

function App() {
  const [allusers, setAllusers] = useState([]);

  useEffect(()=>{
    P1_backend.readAll().then((result) => {
      //setGreeting(greeting);
      console.log(result)
      setAllusers(result);
    });

  }, []);

  const handleDelete = (e, id) =>{
    e.preventDefault();

    P1_backend.delete(parseInt(id, 10)).then((result) => {
      //setGreeting(greeting);
      console.log(result)
      alert("Success Delete User");
      P1_backend.readAll().then((result) => {
        //setGreeting(greeting);
        console.log(result)
        setAllusers(result);
      });
    });
  }

  
  return (
    <><h1>LIST OF ALL USERS</h1>
    <Link to="/create">Add Users</Link>
    <Table responsive>
      <thead>
        <tr>
          <th>No</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Action</th>
          
        </tr>
      </thead>
      <tbody>
        
          {
            allusers.map((val, i) =>(
              <tr>
                <td>{i + 1} </td>
                <td>{val[1].firstname} </td>
                <td>{val[1].lastname} </td>
                <td><Link to={`/update/${val[0]}`}>Update</Link>
                
                <Button variant="link" onClick={(e)=>handleDelete(e, val[0])}>Delete</Button>
                </td>
              </tr>
            ))
          }
        
     
      </tbody>
    </Table></>

  );
}

export default App;
