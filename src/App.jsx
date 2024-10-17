import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Root from './routes/Root.jsx'
import Children from "./routes/Children.jsx";
import Error404 from "./routes/Error404.jsx";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error404 />,
      children: [
        {
          path: "/children",
          element: <Children />,
        },
      ]
    },

  ]);

  return <RouterProvider router={router} />;
}

export default App
