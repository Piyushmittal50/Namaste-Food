import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
    return (
        <div className = "app">
            <Header />
            <Outlet/>
       </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children:[
    {
        path: "/",
        element: <Body/>,
        //errorElement:<Error/>
    },
    {  
        path: "/About",
        element: <About />,
        //errorElement:<Error/>
    },
    {
        path: "/Contact",
        element: <Contact />,  
        //errorElement:<Error/>
    },
    {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
        //errorElement:<Error/>
    }
    ],
    errorElement:<Error/>
    }
]);

const dom = ReactDOM.createRoot(document.getElementById("root"));
dom.render(<RouterProvider router={appRouter} />);
