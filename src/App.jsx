import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import Home from "./components/Home.js"

function App() {

    let router = createBrowserRouter([
        {
            path: "/",
            Component: Home,
        },
    ]);

  return (
      <RouterProvider router={router}/>
  )
}

export default App
