import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { userInfo } from "./utils/UserContext";
import { useState, useEffect } from "react";
import { CartProvider } from "./utils/cartContext";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/Restaurant-Menu";
import Shimmer from "./components/Shimmer";
import Cart from "./components/Cart";

const root = ReactDOM.createRoot(document.getElementById("root"));

// chunking
// lazy loading

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [user, setUser] = useState("Bara");
  //authentication

  useEffect(() => {
    const data = {
      name: "Monu",
    };
    setUser(data.name);
  }, []);
  return (
    <CartProvider>
      <Header />
      {/*  if "/" then body should be called and if about , about should be called */}

      <Outlet />
    </CartProvider>
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
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
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
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);
root.render(<RouterProvider router={appRouter} />);
