import React from 'react'
import About from '../about/About'
import BlogContent from '../blogcontent/BlogContent'
import { Grid, makeStyles } from '@material-ui/core';
import history from '../../util/history'

const useStyles = makeStyles(theme => ({
    root: {
        fontFamily: 'Source Sans Pro'
    }
}))

export default function Homepage(){
    const classes = useStyles()
    
    // Might use this - not sure... will come back to it
    const handlePostSelect = post => {
        history.push("/post", {
            post: post
        })
    }

    return (
        <div
            className={classes.root}>
            <Grid container direction="row">
                <Grid item xs={3}>
                    <About/>
                </Grid>
                <Grid item xs={9}>
                    <BlogContent
                        handlePostSelect={handlePostSelect}/>
                </Grid>
            </Grid>
        </div>
    )
}