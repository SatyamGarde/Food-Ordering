import React from "react";
// import ReactDOM from "react-dom/client";
// import { ReactDOM } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import RestaurantMenu from "./Components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./Components/appStore";
import CartStore from "./Components/CartStore";



const AppLayout = () => {
  return (
    
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
      
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/restaurants/:id",
        element: <RestaurantMenu />,
      },

      {
        path: "/cart",
        element: <CartStore />,
      },
      
    ],
    errorElement: <Error />,
  },
]);



ReactDOM.render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter} />
  </Provider>,
  document.getElementById("root")
);
export default App;