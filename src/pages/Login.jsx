import Logo from "../assets/logo_3.png";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <>
      <section className="flex justify-between items-center">
        <div className="w-[700px] h-[497px] flex flex-col justify-center items-center">
          <img src={Logo} alt="Logo" className="w-[165px]" />
          <p className="text-center text-base tracking-wide font-semibold mt-6">
            Kami hadir untuk menjadikan pengalaman <br /> berbelanja sepatu Anda
            lebih berarti dan <br /> berkesan!
          </p>
        </div>
        <div className="w-[700px] h-[497px] flex flex-col justify-center items-center">
          <div className="font-semibold text-xl">Enter Your Account</div>
          <form className="p-3 w-80 mt-9 rounded-md shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
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
                type="password"
                id="password"
                placeholder="Password"
                className="bg-[#D9D9D9] border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-[#F80F00]"
                required
              />
            </div>
            {/* Password end */}

            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <input type="checkbox" id="remember-me" className="mr-2" />
                <label htmlFor="remember-me" className="text-sm font-medium">
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

export default Login;
