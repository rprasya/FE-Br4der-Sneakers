import { Link } from "react-router-dom";
import Nike from "../assets/Brands/logo_nike_white.png";
import NewBalance from "../assets/Brands/logo_nb_white.png";
import Adidas from "../assets/Brands/logo_adidas_white.png";
import Asics from "../assets/Brands/logo_asics_white.png";
import Puma from "../assets/Brands/logo_puma_white.png";

const Brands = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-16 px-4">
        <div className="text-2xl font-semibold mb-8">Our Brands</div>
        <div className="flex flex-wrap justify-center text-center gap-5 md:gap-10">
          <Link className="flex justify-center items-center w-24 h-24 sm:w-32 sm:h-32 bg-slate-500 border hover:border-black rounded-3xl">
            <img src={Nike} alt="Nike" className="w-20 sm:w-24" />
          </Link>
          <Link className="flex justify-center items-center w-24 h-24 sm:w-32 sm:h-32 bg-slate-500 border hover:border-black rounded-3xl">
            <img src={NewBalance} alt="New Balance" className="w-20 sm:w-24" />
          </Link>
          <Link className="flex justify-center items-center w-24 h-24 sm:w-32 sm:h-32 bg-slate-500 border hover:border-black rounded-3xl">
            <img src={Adidas} alt="Adidas" className="w-20 sm:w-24" />
          </Link>
          <Link className="flex justify-center items-center w-24 h-24 sm:w-32 sm:h-32 bg-slate-500 border hover:border-black rounded-3xl">
            <img src={Asics} alt="Asics" className="w-20 sm:w-24" />
          </Link>
          <Link className="flex justify-center items-center w-24 h-24 sm:w-32 sm:h-32 bg-slate-500 border hover:border-black rounded-3xl">
            <img src={Puma} alt="Puma" className="w-20 sm:w-24" />
          </Link>
        </div>
        <div className="border-b-2 border-[#F80F00] w-full max-w-[800px] my-10"></div>
      </div>
    </>
  );
};

export default Brands;
