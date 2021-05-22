import axios from 'axios'
import store from '../store'

// Request interceptor
axios.interceptors.request.use(request => {
    const access_token = store.getters['auth/access_token']
    if (access_token) {
        request.headers.common['Authorization'] = `Bearer ${access_token}`
    }

    return request
})

// Response interceptor
axios.interceptors.response.use(response => response, error => {
    const { status } = error.response

    if (status === 401) {
        store.dispatch('refreshToken')
    }

    return Promise.reject(error)
})
