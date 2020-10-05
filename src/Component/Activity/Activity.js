import React, { useContext, useState } from 'react';
import fakeData from '../../fakeData';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const useStyles = makeStyles({
  root: {
    maxWidth: 245,
  },
  media: {
    height: 100,
  },
});


const Activity = () => {
  const [activity, setActivity] = useState({
    activityName: ""
  })
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)

  const Activity = fakeData;
  const classes = useStyles();
  return (
    <div  >
      {
        Activity.map(active => <div>
          <Link to='/form'>
            <Card onClick={() => {
              setActivity(activity.activityName = active.name);
              setLoggedInUser(activity.activityName)
            }} className={classes.root} style={{ float: 'left', width: '25%', margin: '30px', height: '100%' }}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={active.image}
                />
                <CardContent  style={{backgroundColor:`#8e44ad`,color:'white'}}>
                  <Link style={{textDecoration:"none",color:'white'}} to={`/eventManager/${active.id}`}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {active.name} 
                  </Typography>
                  </Link>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
         </div>)
      }
    </div>
  );
};

export default Activity;