import React, { useContext, useEffect, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { UserContext } from '../../App';
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        float: 'left',
        width: '40%',
        margin: '20px 20px',
        height: '300px'

    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    }

}));

const Event = () => {
    const classes = useStyles();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [volunteers, setVolunteers] = useState([]);
    useEffect(() => {
        fetch('https://fast-wildwood-91936.herokuapp.com/volunteer?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setVolunteers(data)
                console.log(data)

            })
    }, [])
    console.log(volunteers)
  
    const  deleteEvent=(id)=> {
        
        fetch(`https://fast-wildwood-91936.herokuapp.com/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            
            console.log("deleted successfully")
        })
        console.log(id)
    }
    return (
        <div>
            {
                volunteers.map(volunteer => <div >
                    <Card className={classes.root}>

                        <CardMedia
                            className={classes.cover}
                            image={volunteer.image}
                            title="Live from space album cover"
                        />
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component="h5" variant="h5">
                                    {volunteer.name}
                                </Typography>
                                <Typography component="p">
                                    {(new Date(volunteer.selectedDate).toDateString("dd/MM/yyyy"))}
                                </Typography>
                                <Button onClick={()=>deleteEvent(volunteer._id)} variant="contained" color="primary"> Cancel</Button>
                            </CardContent>
 
                        </div>
                    </Card>
                </div>)
            }
        </div>

    );
};

export default Event;