import React, { useState, useEffect } from 'react'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        height: '10vh',
        width: '25vw',
        boxShadow: '1px 1px 0 0 black',
        '&:hover': {
            transform: 'scale(1.02)',
        },
        fontFamily: 'Source Sans Pro'
    }
}))

export default function BlogPost(props){
    const classes = useStyles()
    const [date, setDate] = useState('1970-01-01')

    useEffect(() => {
        let d = new Date(props.post.updatedAt)
        setDate(`${d.getMonth()+1}-${d.getDate()}-${d.getFullYear()}`)
    }, [props.post.updatedAt])

    return (
        <div
            onClick={() => props.handlePostSelect(props.post)}
            className={classes.root}
            classes="blogpost">
                <Typography variant="subtitle2">{date}</Typography>
                <Typography variant="h4">{props.post.title}</Typography>
                <Typography variant="body2"><i>{props.post.description}</i></Typography>
        </div>
    )
}