import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LogIn from './Component/LogIn/LogIn';
import Form from './Component/Form/Form';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Event from './Component/Event/Event';
import Admin from './Component/Admin/Admin';
import AddEvent from './Component/AddEvent/AddEvent';


export const UserContext = createContext()

function App() {
  const [loggedInUser,setLoggedInUser]=useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
   <Router>
     <Switch>
       <Route path="/home">
         <Home></Home>
       </Route>
     < Route exact path="/">
           <Home></Home>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <PrivateRoute  path="/eventManager/:eventId">
            <Form></Form>
          </PrivateRoute>
          <Route path="/addEvent">
            <AddEvent></AddEvent>
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <PrivateRoute path="/event">
            <Event></Event>
          </PrivateRoute>
     </Switch>
   </Router>
   </UserContext.Provider>
  );
}

export default App;
