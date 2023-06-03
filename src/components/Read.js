import React, { useState } from "react";
import { Button } from "react-bootstrap"
import Table from 'react-bootstrap/Table';
import FormModal from "./FormModal";
function Read(){


    var [userDatas, setUserDatas] = useState([])
    var [isEditIn, setIsEditIn] = useState(false)

    const deleteUser = (id, username) =>{
      if(window.confirm(`Are you sure that you want to delete the data of ${username} ? `)){
        userDatas.splice(id, 1)
        console.log(userDatas)
        localStorage.setItem('name', JSON.stringify(userDatas))
        window.location.reload(true)
      }
      else{
        setUserDatas([...userDatas])
        alert('GAGO KA!!')
      }
  } 

    const editHandler = () =>{
      setIsEditIn(true)
    }
    const editHandler1 = () =>{
      setIsEditIn(false)
    }

  if(localStorage.length!=0){
    userDatas= JSON.parse(localStorage.getItem('name'))
  }
    return(
        <>        
        <div className="myTable">
        <Button variant="success" className="addButtona" onClick={editHandler1}>Add<FormModal edit={isEditIn} /></Button>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Fullname</th>
          <th>Age</th>
          <th>Email</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       {userDatas.map((user, index)=>{
          return <tr key={index}><td>{user.fullName}</td><td>{user.age}</td><td>{user.email}</td><td>{user.status}</td>
          <td><Button variant="warning" className="editButton" onClick={editHandler}>Edit<FormModal id={index} edit={isEditIn}/></Button> <Button variant="danger" onClick={()=>deleteUser(index, user.fullName)} >Delete User</Button></td></tr>
        })}
      
      </tbody>
    </Table>
    </div>
    <Button variant="primary" className="addme" href="https://facebook.com/aurieljames11">Add me</Button>
        </>
    )
}

export default Read