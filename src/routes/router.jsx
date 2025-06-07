import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import JobDetails from "../Pages/Myapplication/JobDetails";
import PrivateRoute from "../contexts/PrivateRoute";
import JobApply from "../Pages/Myapplication/JobApply";
import AddJob from "../Pages/MyPostedJobs/AddJob";
import MyApplications from "../Pages/Myapplication/MyApplications";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../Pages/ViewApplications/ViewApplications";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayouts></RootLayouts>,
        children: [
            { index: true, Component: Home },
            {
                path: "/jobs/:id",
                loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`),
                Component: JobDetails
            },
            {
                path: "/jobApply/:id",
                element: <PrivateRoute>
                    <JobApply></JobApply>
                </PrivateRoute>
            },
            {
                path: "applications",
                loader: () => fetch('http://localhost:3000/applications'),
                element: <PrivateRoute>
                    <MyApplications></MyApplications>
                </PrivateRoute>
            },
            {
                path: "addJob",
                element: <PrivateRoute>
                    <AddJob></AddJob>
                </PrivateRoute>
            },
            {
                path: "register",
                Component: Register
            },
            {
                path: "myPostedJobs",
                element: <PrivateRoute>
                    <MyPostedJobs></MyPostedJobs>
                </PrivateRoute>
            },
            {
                path : "applications/:job_id",
                element : <PrivateRoute>
                    <ViewApplications></ViewApplications>
                </PrivateRoute>,
                loader : ({params})=>fetch(`http://localhost:3000/applications/job/${params.job_id}`)
            },
            {
                path: "login",
                Component: SignIn
            }
        ]
    }
])

export default router