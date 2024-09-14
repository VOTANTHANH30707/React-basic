import logo from "./logo.svg";
import "./App.scss";
import ListToDo from "./Todos/ListToDo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav/Nav";
import MyComponent from "./Example/MyComponent";
import Home from "./Example/Home";
import ListProduct from "./Product/ListProduct";
import DetailProduct from "./Product/DetailProduct";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/todo" element={<ListToDo />} />
            <Route path="/about" element={<MyComponent />} />
            <Route path="/product" element={<ListProduct />} />
            <Route path="/product/:id" element={<DetailProduct />} />
          </Routes>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </Router>
  );
}

export default App;
