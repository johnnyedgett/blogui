import React from 'react'
import About from '../about/About'
import BlogContent from '../blogcontent/BlogContent'
import { Grid } from '@material-ui/core';

export default function Homepage(){
    return (
        <div>
            <Grid container direction="row">
                <Grid item xs={3}>
                    <About/>
                </Grid>
                <Grid item xs={9}>
                    <BlogContent/>
                </Grid>
            </Grid>
        </div>
    )
}