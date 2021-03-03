import axios from 'axios'

const apiClient = axios.create({
    baseURL: `${process.env.API_BASE_URL}/api`,
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
