import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 10000
})

export default {
    getApiTest() {
        return apiClient.get(`/`)
    }
}
