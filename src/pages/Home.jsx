import slides1 from "../assets/imgSlider/domino-164_6wVEHfI-unsplash.jpg";
import slides2 from "../assets/imgSlider/eugene-chystiakov-b2uYNpBG7Ho-unsplash.jpg";
import slides3 from "../assets/imgSlider/paul-volkmer-updW-QUccFE-unsplash.jpg";
import slides4 from "../assets/imgSlider/sara-kurfess-_VfvnjbKFu4-unsplash.jpg";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Home = () => {
  const slides = [
    {
      img: slides1,
    },
    {
      img: slides2,
    },
    {
      img: slides3,
    },
    {
      img: slides4,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      {/* slider */}
      <div className="max-w-[900px] h-[580px] w-full m-auto py-14 px-4 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft size={30} onClick={prevSlide} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight size={30} onClick={nextSlide} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer "
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
      {/* slider end */}

      {/* popularity */}
      <div className="flex flex-col justify-center items-center border border-red-600">
        <h1 className="font-bold text-2xl my-5 mr-[860px]">Populer hari ini</h1>
        <ul className="flex border border-black gap-8">
          <li className="w-[300px] border border-blue-800">
            <img
              src="https://dynamic.zacdn.com/jPqdE4KAhoq8gsJ1AJ9r4bG2FdQ=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/nike-7594-1884434-1.jpg"
              alt=""
              className=""
            />
          </li>
          <li className="w-[300px] border border-blue-800">
            <img
              src="https://cdn-images.farfetch-contents.com/22/28/58/43/22285843_52098863_1000.jpg"
              alt=""
              className=""
            />
          </li>
          <li className="w-[300px] border border-blue-800">
            <img
              src="https://cdn-images.farfetch-contents.com/18/78/65/19/18786519_40721703_1000.jpg"
              alt=""
              className=""
            />
          </li>
        </ul>
      </div>
      {/* popularity end */}
    </>
  );
};

export default Home;
