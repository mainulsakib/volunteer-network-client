import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Admin = () => {
    const [member, setMember] = useState([])
    useEffect(() => {
        fetch('https://fast-wildwood-91936.herokuapp.com/ManyVolunteers')
            .then(res => res.json())
            .then(data => {
                setMember(data)
                console.log(data)
            })
    }, [])

    return (
        <div>
            <div style={{ width: '20%', height: "100vh", float: 'left' }}>
                <Link to="/addEvent"><h1 >ADD Events</h1></Link>
            </div>
            <div width="80% ">
                <h1>Admins </h1>

                {member.map(mem => <div>
                    <table>

                        <tr style={{ border: '1px solid black ' }}>
                            <td style={{ border: '1px solid black', width: '150px' }}>{mem.userName}</td>
                            <td style={{ border: '1px solid black', width: '150px' }}>{mem.name}</td>
                            <td style={{ border: '1px solid black', width: '250px' }}> {mem.email}</td>
                            <td style={{ border: '1px solid black', width: '150px' }}>{(new Date(mem.selectedDate).toDateString("dd/MM/yyyy"))}</td>
                        </tr>
                    </table>

                </div>)
                }
            </div>
        </div>
    );
};

export default Admin;
