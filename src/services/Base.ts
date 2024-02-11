import axios from 'axios'

const baseURL = 'http://localhost:3000'

const service = axios.create({
    baseURL,
})

export default service