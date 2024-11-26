import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DashboardLayout from "../components/DashboardLayout";
import Home from "../pages/Home";
import Dashboard from "../components/Dashboard";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ]
    },
    {
        path: '/admin/dashboard',
        element: <DashboardLayout/>,
        children: [
            {
                path: '/admin/dashboard',
                element: <Dashboard/>
            }
        ]
    }
])


export default router