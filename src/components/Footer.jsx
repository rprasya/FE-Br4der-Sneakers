import { Link } from "react-router-dom";
import LogoFooter from "../assets/Logo/logo_1.png";
import Facebook from "../assets/Sosmed/icon_fb.png";
import Instagram from "../assets/Sosmed/icon_ig.png";
import Twitter from "../assets/Sosmed/icon_x.png";
import Youtube from "../assets/Sosmed/icon_yt.png";
import Tiktok from "../assets/Sosmed/icon_tiktok.png";

const Footer = () => {
  return (
    <>
      <div className="h-72 flex justify-around items-center bg-[#F0F0F0]">
        <div className="flex flex-col gap-6">
          <img src={LogoFooter} alt="Logo Footer" className="w-32" />
          <p className="font-semibold">
            Tingkatkan Gaya, Tingkatkan Percaya Diri Temukan <br /> Sepatu yang
            Tepat untukmu hanya disini!
          </p>
          <Link className="w-48 bg-[#F80F00] text-center text-white rounded-md px-3 py-1 hover:bg-[#C60C00]">
            Learn More
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-semibold">Contact Us</p>
          <p>(+62) 884 8288 242</p>
          <p className="font-semibold">Follow Us</p>
          <ul className="flex gap-4">
            <li>
              <Link>
                <img src={Facebook} alt="" className="w-7" />
              </Link>
            </li>
            <li>
              <Link>
                <img src={Instagram} alt="" className="w-7" />
              </Link>
            </li>
            <li>
              <Link>
                <img src={Twitter} alt="" className="w-7" />
              </Link>
            </li>
            <li>
              <Link>
                <img src={Youtube} alt="" className="w-7" />
              </Link>
            </li>
            <li>
              <Link>
                <img src={Tiktok} alt="" className="w-7" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
