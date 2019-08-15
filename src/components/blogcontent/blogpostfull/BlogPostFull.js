import React, { useEffect, useState } from 'react'
import { Grow, Typography } from '@material-ui/core';

export default function BlogPostFull(props) {
    const [post, setPost] = useState({})
    const [date, setDate] = useState('1970-01-01')
    
    useEffect(() => {
        setPost(props.location.state.post)
        let d = new Date(props.location.state.post.updatedAt)
        setDate(`${d.getMonth()+1}-${d.getDate()}-${d.getFullYear()}`)
    }, [props.location.state.post])

    return (
        <Grow in={true}>
            <div
                align="center">
                    <Typography variant="h2">{post.title}</Typography>
                    <Typography variant="subtitle2">Created on {date}</Typography>
                    <br/>
                    <Typography variant="body2">{post.body}</Typography>
            </div>
        </Grow>
    )
}