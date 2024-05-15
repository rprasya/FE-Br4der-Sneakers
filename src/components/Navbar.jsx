import { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import LogoHome from "../assets/Logo/Logo-Home.png";
import { IoMdSearch, IoMdCart } from "react-icons/io";
import axios from "axios";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AfterLogin from "../pages/AfterLogin";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://br4der-api.up.railway.app/product?q=${query}`
      );
      const filteredSuggestions = response.data.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } catch (error) {
      console.log("error:", error);
    }
    setLoading(false);
  };

  if (query.trim() !== "") {
    fetchData();
  } else {
    setSuggestions([]);
  }
}, [query]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleItemClick = (id) => {
    navigate(`/products/${id}`);
    setQuery("");
  };

  return (
    <>
      <nav className="px-4 py-3 md:px-7 md:py-5 shadow-lg">
    <ul className="flex flex-col md:flex-row justify-between items-center bg-white">
      <li className="mb-3 md:mb-0">
        <Link to="/">
          <img src={LogoHome} alt="Logo" className="w-[100px] md:w-[150px]" />
        </Link>
      </li>

      <li className="relative mb-3 md:mb-0 md:mr-5 w-full md:w-auto">
        <div className="relative group w-full md:w-auto">
          <input
            type="text"
            placeholder="Search Your Sneakers..."
            className="w-full md:w-60 h-8 px-2 py-1 border border-black rounded-md hover:shadow-[5px_5px_0px_0px_rgba(248,15,0)] focus:outline-none"
            value={query}
            onChange={handleInputChange}
          />
          <IoMdSearch className="text-gray-500 text-xl hover:text-black hover:cursor-pointer absolute top-1/2 -translate-y-1/2 right-3" />
        </div>
        {loading && <p>Loading...</p>}
        <ul className="absolute z-10 top-full left-0 w-full md:w-60 bg-slate-200 rounded-md mt-1">
          {suggestions.map((item) => (
            <li
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className="cursor-pointer px-4 py-2 hover:text-white hover:bg-[#F80F00]"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </li>

      <li className="flex flex-col md:flex-row justify-between items-center gap-4 w-full md:w-auto">
        <Link
          onClick={() => alert("Ordering not available yet")}
          className="bg-[#F80F00] transition-all duration-200 text-white py-2 px-3 rounded-full flex items-center gap-3 group w-full md:w-auto justify-center"
        >
          <span className="group-hover:block hidden transition-all duration-200">
            Order
          </span>
          <IoMdCart className="text-xl drop-shadow-md cursor-pointer" />
        </Link>
        <Link
          to="/login"
          className="text-lg hover:underline hover:text-[#F80F00]"
        >
          <div>Login</div>
        </Link>
        <p className="text-[#F80F00] text-lg hidden md:block">|</p>
        <Link
          to="/register"
          className="text-lg hover:underline hover:text-[#F80F00]"
        >
          <div>Register</div>
        </Link>
      </li>
    </ul>
  </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/afterlogin" element={<AfterLogin />} />
      </Routes>
    </>
  );
};

export default Navbar;
