import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import TaskContextProvider from "../contexts/TaskContexts"
import CreatePage from "../pages/CreatePage"
import MainPage from "../pages/MainPage"
import UpdatePage from "../pages/UpdatePage"

const routes = [
    {
       element:(
        <div>
            <Header/>
            <Outlet/>
        </div>
       ),
       path:'/',
       children: [
        {
            element: (
                <div>
                    <TaskContextProvider>
                        <MainPage/>
                    </TaskContextProvider>
                </div>
            ),
            index:true
        },
        {
            element:<CreatePage/>,
            path:"create"
        },
        {
            element:<UpdatePage/>,
            path:"update/:userId"
        }
       ]
    }
]

export default routes