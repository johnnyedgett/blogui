import axios from 'axios'

export const getSinglePost = (id, callback) => {
    axios.get(`/api/post/${id}`)
        .then(res => {
            callback(res.data, true)
        })
        .catch(err => {
            callback(err, false)
        })
}

export const getPostsByPage = (page, size, callback) => {
    axios.get(`/api/post/page?page=${page}&size=${size}&sort=createdAt,desc`)
        .then(res =>{
            callback(res.data, true)
        })
        .catch(err => {
            callback(err, false)
        })
}