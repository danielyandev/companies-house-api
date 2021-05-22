import axios from 'axios'
import store from '../store'
import router from "../router";

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
        // store.dispatch('auth/refreshToken').then(data => {
        //     if (!data.hasOwnProperty('access_token')){
        //         router.push({name: 'auth'})
        //     }
        // })
    }

    return Promise.reject(error)
})
