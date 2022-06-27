import { Route,Routes} from "react-router-dom";
import Home from "./Components/Home/Home";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
          <ScrollToTop smooth color="#6f00ff" />

      <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='home' element={<Home/>}/>

      </Routes>
    </>
  );
}

export default App;
