import Logo from "../assets/logo_3.png";

const Login = () => {
  return (
    <section className="flex justify-between items-center">
      <div className="w-[700px] h-[497px] flex flex-col justify-center items-center border border-black">
        <img src={Logo} alt="Logo" className="w-[165px]" />
        <p className="text-center text-base tracking-wide font-semibold mt-6">
          Kami hadir untuk menjadikan pengalaman <br /> berbelanja sepatu Anda
          lebih berarti dan <br /> berkesan!
        </p>
      </div>
      <div className="w-[700px] h-[497px] flex flex-col justify-center items-center border border-red-600">
        <div className="font-semibold text-xl">BUAT AKUN</div>
        <form className="login-form w-80 mt-10">
            
          {/* email */}
          <div className="form-group mb-4">
            <label htmlFor="email" className="text-lg font-medium block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email Anda"
              className="w-80 bg-[#D9D9D9] border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-[#F80F00]"
              required
            />
          </div>
          {/* email end */}

          {/* Password */}
          <div className="form-group mb-4">
            <label
              htmlFor="password"
              className="text-lg font-medium block mb-2"
            >
              Kata Sandi
            </label>
            <input
              type="password"
              id="password"
              placeholder="Kata Sandi Anda"
              className="w-80 bg-[#D9D9D9] border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-[#F80F00]"
              required
            />
          </div>
          {/* Password end */}

          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <input type="checkbox" id="remember-me" className="mr-2" />
              <label htmlFor="remember-me" className="text-sm font-medium">
                Ingat Saya
              </label>
            </div>
            <a href="#" className="hover:text-[#F80F00]">Lupa Kata Sandi?</a>
          </div>
          <button
            type="submit"
            className="w-80 bg-[#F80F00] text-white rounded-full px-4 py-2 font-medium w-full hover:bg-[#C60C00]"
          >
            MASUK
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
