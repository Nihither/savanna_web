import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Root from './routes/Root.jsx'
import Children from "./routes/Children.jsx";
import Error404 from "./routes/Error404.jsx";
import Adult from "./routes/Adult.jsx";
import Chinese from "./routes/Chinese.jsx";
import Rki from "./routes/Rki.jsx";
import Company from "./routes/Company.jsx";
import MasterClass from "./routes/MasterClass.jsx";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error404 />,
    },
    {
      path: "/children",
      element: <Children />,
    },
    {
      path: "/adult",
      element: <Adult />,
    },
    {
      path: "/chinese",
      element: <Chinese />,
    },
    {
      path: "/rki",
      element: <Rki />,
    },
    {
      path: "/company",
      element: <Company />,
    },
    {
      path: "/masterclass",
      element: <MasterClass />,
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App
