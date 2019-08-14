import React from 'react'
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        height: '40vh'
    }
}))

export default function BlogPost(props){
    const classes = useStyles()
    return (
        <Paper
            className={classes.root}>
                <Typography variant="h4">{props.title}</Typography>
                <Typography variant="body2">{props.body}</Typography>
        </Paper>
    )
}