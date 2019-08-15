import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core'
import { Link } from 'react-router-dom'

export default function Navbar(){
    return (
        <AppBar
            position="static"
            color="inherit"
            elevation={0}>
            <Toolbar>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>home</Link>
                <div style={{ flexGrow: 1 }}/>
                <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>about me</Link>
            </Toolbar>
        </AppBar>
    )
}