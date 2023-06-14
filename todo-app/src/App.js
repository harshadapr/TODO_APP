
import './App.css';
import Navbar from './Components/Navbar';
// import TodoDisplay from './Components/TodoDisplay';
// import TodoInput from './Components/TodoInput';
import { Routes, Route } from "react-router-dom"
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      {/* <h2>hello harsha</h2> */}
      {/* // {<Navbar />}
      // <TodoInput /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={< Signup />}></Route>
        <Route path="/dashboard" element={< Dashboard />}></Route>
        <Route path="/footer" element={< Footer />}></Route>


      </Routes>
      {/* <TodoDisplay /> */}
    </div>
  );
}

export default App;
