import VueRouter from "vue-router";
import routes from "./routes";

const router = new VueRouter({
    routes,
    mode: "history"
})

// todo replace by store value
const isLoggedIn = localStorage.getItem('access_token')

router.beforeEach((to, from, next) => {
    // if not logged in and auth is required, redirect to login page
    if (to.matched.some(record => record.meta.requiresAuth) && !isLoggedIn) {
        next({name: "auth",})
    } else {
        next()
    }
})

export default router
