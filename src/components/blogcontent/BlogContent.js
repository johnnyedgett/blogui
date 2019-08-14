import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import BlogPost from './blogpost/BlogPost';
import { getPostsByPage } from '../../services/post-service';

export default function BlogContent() {
    const [blogposts, setBlogposts] = useState([])

    useEffect(() => {
        getPostsByPage(0, 5, handlePageResponse)
        setBlogposts([
            {
                "title":"My first blog post",
                "body": "Hello, world"
            },
            {
                "title":"My second blog post",
                "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut massa massa, viverra at gravida nec, ultricies id mauris. Praesent in ex nec risus faucibus congue a eu ex. Aliquam imperdiet sed tortor vel lobortis. Donec ultricies pharetra ligula, sed ullamcorper elit consequat vitae. Suspendisse a tincidunt elit, ac placerat velit. Phasellus porttitor ligula in imperdiet vestibulum. Vestibulum vitae accumsan nulla. Etiam commodo elementum arcu, nec bibendum enim blandit at. Sed ac lacus et augue consequat viverra. Sed lacinia felis ac lorem eleifend sodales. Sed auctor justo eget sapien commodo, sed euismod urna elementum. Integer porttitor neque eu dignissim tempus. Nullam laoreet a eros sit amet fringilla. Cras porta nec lorem eu ornare. Fusce cursus tortor non augue porttitor, a venenatis libero bibendum. Nullam vulputate elit non gravida vehicula. Duis laoreet ipsum at dui commodo feugiat. Morbi cursus quam mollis erat porttitor faucibus. Sed quis neque condimentum augue rhoncus posuere. Nunc lobortis, lectus sed tristique dapibus, velit lorem hendrerit odio, non mollis arcu purus eget odio. Integer ut fringilla justo, ac hendrerit elit. Integer aliquet imperdiet augue quis fermentum. Aliquam ligula ex, lobortis vel felis non, vehicula eleifend dui. Sed eget finibus tortor."
            }
        ])
    }, [])

    const handlePageResponse = (data, success) => {
        if(success){
            setBlogposts(
                data.content
            )
        }
        else
            console.error(data)
    }

    return (
        <div>
            <Grid container direction="column" spacing={1}>
                {blogposts.map((p,i)=>{
                    return (
                        <Grid item key={i}>
                            <BlogPost
                                title={p.title}
                                body={p.body}/>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}