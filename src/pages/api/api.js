import Axios from 'axios';
let a = Axios.create({
    baseURL: 'http://hshjs'
})

a.get('/ggg/')
