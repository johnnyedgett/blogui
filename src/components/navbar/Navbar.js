import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core'

export default function Navbar(){
    return (
        <AppBar
            position="static"
            color="inherit"
            style={{ marginLeft: 0 }}
            elevation={0}>
            <Toolbar
                style={{ margin: 0 }}>
                <Typography>Johnny Edgett's Personal Blog</Typography>
            </Toolbar>
        </AppBar>
    )
}