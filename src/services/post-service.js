import axios from 'axios'

export const getPostsByPage = (page, size, callback) => {
    axios.get(`/api/post/page?page=${page}&size=${size}&sort=createdAt,desc`)
        .then(res =>{
            callback(res.data, true)
        })
        .catch(err => {
            callback(err, false)
        })
}