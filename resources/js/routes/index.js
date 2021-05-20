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
        component: Home
    },
    {
        path: '/:catchAll(.*)',
        component: Auth,
        name: 'NotFound'
    }
]

export default routes
