import VueRouter from "vue-router";
import routes from "./routes";
import store from "../store"

const router = new VueRouter({
    routes,
    mode: "history"
})

const isLoggedIn = () => !!store.getters["auth/access_token"]

router.beforeEach((to, from, next) => {
    // if not logged in and auth is required, redirect to login page
    if (to.matched.some(record => record.meta.requiresAuth) && !isLoggedIn()) {
        next({name: "auth"})
    }
    else if (to.matched.some(record => record.meta.requiresGuest) && isLoggedIn()) {
        next({name: "home"})
    }
    else {
        next()
    }
})

export default router
