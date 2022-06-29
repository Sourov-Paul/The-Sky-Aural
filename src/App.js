import { Route,Routes} from "react-router-dom";
import Home from "./Components/Home/Home";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from "react-scroll-to-top";
import Check from "./Components/Check";
import Check2 from "./Components/Check2";

function App() {
  return (
    <>
          <ScrollToTop smooth color="#6f00ff" />

      <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='check' element={<Check/>}/>
      <Route path='check2' element={<Check2/>}/>

      </Routes>
    </>
  );
}

export default App;
