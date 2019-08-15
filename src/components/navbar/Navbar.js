import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core'
import { Link } from 'react-router-dom'

export default function Navbar(){
    return (
        <AppBar
            position="static"
            color="inherit"
            style={{ marginLeft: 0 }}
            elevation={0}>
            <Toolbar
                style={{ margin: 0 }}>
                <Typography><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Johnny Edgett's Blog</Link></Typography>
            </Toolbar>
        </AppBar>
    )
}