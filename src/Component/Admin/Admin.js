import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Admin = () => {
    const [member,setMember] =useState([])
    useEffect(() => {
        fetch('https://fast-wildwood-91936.herokuapp.com/ManyVolunteers')
        .then(res => res.json())
        .then(data=>{
            setMember(data)
            console.log(data)
        })
    },[])

    return (
        <div>
            <div style={{width:'20%', height:"100vh",float: 'left'}}>
               <Link to="/addEvent"><h1 >ADD Events</h1></Link>
            </div>
            <div width="80% ">
            <h1>Admins </h1>
          {
            member.map(mem => <li>{mem.userName}  {mem.name}  {mem.email} {(new Date(mem.selectedDate).toDateString("dd/MM/yyyy"))}</li>)
            }
        </div>
        </div>
    );
};

export default Admin;