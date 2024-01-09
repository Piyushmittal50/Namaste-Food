import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

const AppLayout = () => {
    return (
        <div className = "app">
            <Header />
            <Body/>
       </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement:<Error/>
    },
    {  
        path: "/About",
        element: <About />,
        errorElement:<Error/>
    },
    {
        path: "/Contact",
        element: <Contact />,  
        errorElement:<Error/>
    }
]);

const dom = ReactDOM.createRoot(document.getElementById("root"));
dom.render(<RouterProvider router={appRouter} />);
