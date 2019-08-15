import React from 'react'
import { Grid } from '@material-ui/core';

export default function About(){
    return (
        <div
            align="center">
            <Grid container direction="column" spacing={2} justify="center">
                <Grid item>
                    <img src={require('../../assets/me.jpeg')} alt="Johnny Edgett" width="75%" height="75%" style={{ borderRadius: '50%'}}/>
                </Grid>
                <Grid item>
                    <Grid container direction="row" spacing={1}>
                        <Grid item> 
                            <img src={require('../../assets/gh-logo.png')} alt="Github" height="32px" width="32px"/>
                        </Grid>
                        <Grid item>
                            <img src={require('../../assets/li-logo.png')} alt="LinkedIn" height="36px" width="42px"/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <br/>
        </div>
    )
}