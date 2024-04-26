import { Routes, Route, Link } from "react-router-dom";
import LogoHome from "../assets/Logo/Logo-Home.png";
import { IoMdSearch, IoMdCart } from "react-icons/io";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AfterLogin from "../pages/AfterLogin";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";

const Navbar = () => {
  return (
    <>
      <nav className="px-7 py-5 shadow-lg">
        <ul className="flex justify-between items-center bg-white">
          <li>
            <Link to="/">
              <img src={LogoHome} alt="Logo" className="w-[150px]" />
            </Link>
          </li>

          {/* search bar */}
          <li>
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search Your Sneakers..."
                className="w-60 h-8 px-2 py-1 border border-black rounded-md hover:shadow-[5px_5px_0px_0px_rgba(248,15,0)] focus:outline-none"
              />
              <IoMdSearch className="text-gray-500 text-xl hover:text-black hover:cursor-pointer absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
          </li>
          {/* search bar end */}

          {/* cart, login, regist */}
          <li className="flex justify-between items-center gap-4">
            <Link
              onClick={() => alert("Ordering not available yet")}
              className="bg-[#F80F00] transition-all duration-200 text-white py-2 px-3 rounded-full flex items-center gap-3 group"
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
            <p className="text-[#F80F00] text-lg">|</p>
            <Link
              to="/register"
              className="text-lg hover:underline hover:text-[#F80F00]"
            >
              <div>Register</div>
            </Link>
          </li>
          {/* cart, login, regist end */}
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
