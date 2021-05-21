import Auth from "../pages/Auth";
import Home from "../pages/Home";

const routes = [
    {
        path: "/",
        redirect: "/auth"
    },
    {
        path: "/auth",
        name: "auth",
        component: Auth
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
