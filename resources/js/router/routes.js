import Auth from "../pages/Auth";
import Home from "../pages/Home";

const routes = [
    {
        path: "/",
        redirect: "/home"
    },
    {
        path: "/auth",
        name: "auth",
        component: Auth,
        meta: {
            requiresGuest: true
        }
    },
    {
        path: "/home",
        name: "home",
        component: Home,
        meta: {
            requiresAuth: true
        }
    },

    // redirect to auth if nothing matched
    {
        path: "/:catchAll(.*)",
        redirect: '/auth'
    }
]

export default routes
