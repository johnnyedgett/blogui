import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import BlogPost from './blogpost/BlogPost';
import { getPostsByPage } from '../../services/post-service';

export default function BlogContent(props) {
    const [blogposts, setBlogposts] = useState([])

    useEffect(() => {
        getPostsByPage(0, 5, handlePageResponse)
    }, [])

    const handlePageResponse = (data, success) => {
        if(success){
            setBlogposts(data.content)
        }
        else
            console.error(data)
    }

    return (
        <div
            style={{ marginLeft: '12vw' }}>
            <Grid container direction="column" spacing={2}>
                {blogposts.map((p,i)=>{
                    return (
                        <Grid item key={i}>
                            <BlogPost
                                post={p}
                                updatedAt={p.updatedAt}
                                handlePostSelect={props.handlePostSelect}/>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}