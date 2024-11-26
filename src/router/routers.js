import { Routes,Route} from "react-router-dom"
import HomePage from "../pages/home-page/HomePage"
import LoginForm from "../pages/login-page"

const Routers = () => {
  return (
  <Routes>
    <Route index element={<HomePage/>} />
    <Route path="/login" element={<LoginForm/>} />
  </Routes>
  )
}

export default Routers
