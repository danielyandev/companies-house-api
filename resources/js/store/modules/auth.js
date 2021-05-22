import * as types from '../mutation-types'
import {getUser, login, logout, refreshToken, register} from "../../api/requests/auth";

// initial state
const state = () => ({
    user: null,
    access_token: localStorage.getItem('access_token') || null,
    refresh_token: localStorage.getItem('refresh_token') || null
})

// getters
const getters = {
    user: state => state.user,
    access_token: state => state.access_token,
    refresh_token: state => state.refresh_token
}

// actions
const actions = {
    async login({commit, dispatch}, payload) {
        try{
            const {data} = await login(payload)
            commit(types.SAVE_TOKEN, data)
            await dispatch('fetchUser')
            return data
        }catch (e){
            return e.response.data
        }
    },

    async register({commit, dispatch}, payload) {
        try{
            const {data} = await register(payload)
            await dispatch(this.login({
                email: payload.email,
                password: payload.password
            }))
            commit(types.FETCH_USER_SUCCESS, {user: data})
            return data
        }catch (e){
            return e.response.data
        }
    },

    async fetchUser({commit}) {
        try {
            const {data} = await getUser()

            commit(types.FETCH_USER_SUCCESS, {user: data})
        } catch (e) {
            commit(types.FETCH_USER_FAILURE)
        }
    },

    async refreshToken({commit}) {
        try{
            const {data} = await refreshToken(getters.refresh_token)
            commit(types.SAVE_TOKEN, data)
            return data
        }catch (e){
            return e.response.data
        }
    },

    async logout({commit}) {
        try {
            await logout()
        } catch (e) {
        }
        commit(types.LOGOUT)
    }

}

// mutations
const mutations = {
    [types.SAVE_TOKEN](state, {access_token, refresh_token}) {
        state.access_token = access_token
        state.refresh_token = refresh_token
        localStorage.setItem('access_token', access_token)
        localStorage.setItem('refresh_token', refresh_token)
    },

    [types.FETCH_USER_SUCCESS](state, {user}) {
        state.user = user
    },

    [types.FETCH_USER_FAILURE](state) {
        state.access_token = null
        state.refresh_token = null
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
    },

    [types.LOGOUT](state) {
        state.user = null
        state.access_token = null
        state.refresh_token = null

        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
