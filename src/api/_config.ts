import axios from 'axios'

const API = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com'
})
// We can use API.interceptors here in order to set rules for request and response

export default API