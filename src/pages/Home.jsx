import Brands from "../components/Brands";
import Slides from "../components/Slides";
import Tranding from "../components/Tranding";
import DisplaySneakers from "../components/DisplaySneakers";

const Home = () => {
  return (
    <>
      {/* slider */}
      <Slides />
      {/* slider end */}

      {/* tranding */}
      <Tranding />
      {/* tranding end */}

      {/* brands */}
      <Brands />
      {/* brands end */}

      {/* display sneakers */}
      <DisplaySneakers />
      {/* display sneakers end */}
    </>
  );
};

export default Home;
