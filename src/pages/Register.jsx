import { useState } from "react";
import Logo from "../assets/Logo/logo_3.png";
import Footer from "../components/Footer";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <section className="flex justify-between items-center mb-10">
        <div className="w-[700px] h-[685px] flex flex-col justify-center items-center">
          <img src={Logo} alt="Logo" className="w-[165px]" />
          <p className="text-center text-base tracking-wide font-semibold mt-6">
            Kami hadir untuk menjadikan pengalaman <br /> berbelanja sepatu Anda
            lebih berarti dan <br /> berkesan!
          </p>
        </div>
        <div className="w-[700px] h-[497px] flex flex-col justify-center items-center">
          <div className="font-semibold text-xl">Create Account</div>
          <form className="p-3 w-80 mt-9 rounded-md shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
            {/* Name */}
            <div className="mb-4">
              <label htmlFor="email" className="text-lg font-medium block mb-2">
                Fullname
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Full Name"
                className="bg-[#D9D9D9] border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-[#F80F00]"
                required
              />
            </div>
            {/* Name end */}

            {/* email */}
            <div className="mb-4">
              <label htmlFor="email" className="text-lg font-medium block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="bg-[#D9D9D9] border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-[#F80F00]"
                required
              />
            </div>
            {/* email end */}

            {/* Password */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="text-lg font-medium block mb-2"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                className="bg-[#D9D9D9] border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-[#F80F00]"
                required
              />
              <button
                type="button"
                className="absolute top-[82%] right-[185px] transform -translate-y-1/2 focus:outline-none"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEyeSlash className="text-xl" />
                ) : (
                  <FaEye className="text-xl" />
                )}
              </button>
            </div>
            {/* Password end */}

            {/* Repeat Password */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="text-lg font-medium block mb-2"
              >
                Confirm Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Confirm Password"
                className="bg-[#D9D9D9] border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-[#F80F00]"
                required
              />
              <button
                type="button"
                className="absolute top-[98%] right-[185px] transform -translate-y-1/2 focus:outline-none"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEyeSlash className="text-xl" />
                ) : (
                  <FaEye className="text-xl" />
                )}
              </button>
            </div>
            {/* Repeat Password end */}

            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <input type="checkbox" id="remember-me" className="mt-1 mr-1" />
                <label htmlFor="remember-me" className="top- text-sm font-medium">
                  Remember
                </label>
              </div>
              <a href="#" className="hover:text-[#F80F00]">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="bg-[#F80F00] text-white rounded-full px-4 py-2 font-medium w-full hover:bg-[#C60C00]"
            >
              LOGIN
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Register;
