
import RootLayout from "./layout/RootLayout"
import About from "./pages/About"
import Home from "./pages/Home"
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import More from "./pages/More"


const App = () => {
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home/>}/>
            <Route path="Home" element={<Home />}></Route>
            <Route path="About" element={<About />}></Route>
           <Route path="More" element={<More />}></Route>
        </Route>
    )
)



   return (
    <>
      <RouterProvider router={router} />
      
    </>
  )
}

export default App