import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { AboutScreen } from '../about/AboutScreen';
import { HomeScreen } from '../home/HomeScreen';
import { RoverScreen } from '../rovers/RoverScreen';
import { NavBar } from '../ui/NavBar';



export const AppRouter = () => {
    
    return(
    <>
    <Router>
    <NavBar />
        <> 
            <Switch>            
                <Route exact path="/rover/:roverName" component={ RoverScreen } />
                <Route exact path="/about" component={ AboutScreen } /> 
                <Route path = "/" component = { HomeScreen } />       
            </Switch>    
        </>
    </Router>
    
    </>
    )
}