import Navbar from "./Components/Navbar";
import {BrowserRouter ,  Routes , Route} from 'react-router-dom';
import Home from "./Pages/Home";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Signup from "./Pages/Signup";
import "rsuite/dist/rsuite.min.css";
import Login from "./Pages/Login";
import Dress from "./Pages/Dress";
import SelectedCloth from "./Pages/SelectedCloth";
import MyCart from "./Pages/MyCart";




function App() {
  return (
    <div className="App">
     {/* <Navbar /> */}
     <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Dress/:Category" element={<Dress />} />
            <Route path="/SelectedDress" element={  <SelectedCloth />}/>
            <Route path="/MyCart/:uid" element={<MyCart />} />
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
