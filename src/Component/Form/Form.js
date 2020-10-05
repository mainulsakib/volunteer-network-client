import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Form.css';
import { useContext } from 'react';
import { UserContext } from '../../App';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import logo from '../../logos/Group 1329.png';
import Grid from '@material-ui/core/Grid';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import { Button } from '@material-ui/core';
// import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';



const onSubmit = data => {
    
    //   const savedCart= getDatabaseCart()
    //   const orderDetails ={...loggedInUser,product:savedCart,shipment:data,orderTime:new Date()}
    //   fetch('https://pacific-falls-42663.herokuapp.com/addOrder',{
    //     method: 'POST',
    //     headers: {
    //       "content-Type": 'application/json',
    //     },
    //     body: JSON.stringify(orderDetails)
    //   })
    //   .then(res=>res.json())
    //   .then(data=>{
    //     if(data){
    //       processOrder()
    //       alert('Your order placed successfully');
    //     }
    //   })
};

//   console.log(watch("example")); // watch input value by passing the name of it


const Form = () => {
    const {eventId}=useParams();
    let EvntId=parseInt(eventId);
    const event = fakeData.find( pd => pd.id === EvntId);
 
    const [selectedDate, setSelectedDate] = useState(new Date())
    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleDateChange = (date) => {
         setSelectedDate(date);
    };

    const handleVolunteer=()=>{
        const volunteer={...loggedInUser,selectedDate,...event };
        fetch('http://localhost:5000/addVolunteers',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(volunteer)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }
    return (
        <React.Fragment>
            <CssBaseline />
            <Container >
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh', textAlign: 'center' }} >
                    <img style={{ height: '100px', width: '200px', margin: '50px' }} src={logo} alt="" />
                    <form style={{ backgroundColor: 'white', margin: '0 auto', padding: '50px', width: '400px', borderRadius: "10px" }} className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                        <input name="name" defaultValue={loggedInUser.userName} ref={register({ required: true })} placeholder="Your Name" />
                        {errors.name && <span className="error">Name is required</span>}

                        <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
                        {errors.email && <span className="error">Email is required</span>}

                        <input name="Description" ref={register({ required: true })} placeholder="Description " />
                        {errors.address && <span className="error">Address is required</span>}

                        <input name="Event" defaultValue={event.name} ref={register({ required: true })} placeholder="Event" />
                        {errors.phone && <span className="error">Phone Number is required</span>}
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-around">
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    onChange={handleDateChange}
                                    value={selectedDate}
                                   
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />

                            </Grid>
                        </MuiPickersUtilsProvider>

                        <Link to='/event' ><Button onClick={handleVolunteer}>Submit</Button></Link>
                    </form>
                </Typography>
            </Container>
        </React.Fragment>
    );
};

export default Form;

