import React from 'react'
import Navbar from '../navbar/Navbar'
import Homepage from '../homepage/Homepage'
import BlogPostFull from '../blogcontent/blogpostfull/BlogPostFull'
import { Switch, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core';
import './App.css'
import AboutPage from '../aboutpage/AboutPage'

const useStyles = makeStyles(theme => ({
    root: {
        marginLeft: '20vw',
        marginRight: '20vw',
        fontFamily: 'Source Sans Pro'
    }
}))

export default function App(){
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route exact path="/post" component={BlogPostFull}/>
                <Route exact path="/about" component={AboutPage}/>
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