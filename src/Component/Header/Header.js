import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logos/Group 1329.png'
import header from '../../Header.jpg'
import './Header.css'
import { Button, InputBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  inputRoot: {
    color: 'inherit',
    backgroundColor: 'white'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));


const Header = () => {
  const classes = useStyles();

  return (
    <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(${header})` }} className="header">
      <nav className="nav">

        <ul>
          <li>
            <img className="logo" src={logo} alt="" />
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/login">Donation</Link>
          </li>
          <li>
            <Link className="btn-book" to="/book">Event</Link>
          </li>
          <li>
            <Link to="/Blog">Blog</Link>
          </li>
          <li>
            <Link to="/Donation">Donation</Link>
          </li>
          <li>
            <Link to="/login">
            <Button variant="contained" color="primary">
              Register
</Button>
            </Link>
          </li>
          <li>
            <Link to="/admin">
              <Button variant="contained" color="secondary">
                Admin
</Button>
            </Link>
          </li>

        </ul>

      </nav>
      <div className="title-container">
        <h1>I grow by helping people in need.</h1>
        <div>
          <SearchIcon />
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
          <Button variant="contained" color="primary">
            Search
</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;