import React from 'react'
import Navbar from '../navbar/Navbar'
import Homepage from '../homepage/Homepage'
import { Switch, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        marginLeft: '20vw',
        marginRight: '20vw'
    }
}))

export default function App(){
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route component={() => {
                    return (
                        <div
                            align="center">
                            <h1>404 Not found</h1>
                            <br/>
                            Try again, loser!
                        </div>
                    )
                }}/>
            </Switch>
        </div>
    )
}