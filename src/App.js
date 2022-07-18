import { Route,Routes} from "react-router-dom";
import Home from "./Components/Home/Home";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Login from "./Components/Login-Reg/Login/Login";
import SignUp from "./Components/Login-Reg/SignUp/SignUp";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import MobilePost from "./Components/AdminRoute/MobilePost/MobilePost";
import Mobile from "./Components/Products/Mobile/Mobile";
import MobileDetails from "./Components/MobileDetails/MobileDetails";
import MakeAdmin from "./Components/MakeAdmin/MakeAdmin";
import AdminRoute from "./Components/PrivateRoute/AdminRoute/AdminRoute";
import MobileShop from "./Components/AllShops/MobileShop/MobileShop";

function App() {









  return (
    <>
    <AuthProvider>

      <Routes>

      <Route path='/' element={<Home  />}/>
      <Route path='home' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<SignUp/>}/>
      <Route path='mobileProduct' element={<Mobile/>}/>
      <Route path='/mobileDetails/:id' element={<MobileDetails  />}/>
      <Route path='mobileShop' element={<MobileShop/>}/>

      {/* admin route */}
      <Route path='makeAdmin' element={<AdminRoute><MakeAdmin/></AdminRoute>}/>
      <Route path='mobilePost' element={<AdminRoute><MobilePost/></AdminRoute>}/>
      
      
      </Routes>

      </AuthProvider>
    </>
  );
}

export default App;
