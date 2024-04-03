import Brands from "../components/Brands";
import Slides from "../components/Slides";
import Tranding from "../components/Tranding";

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
      <div>
        
      </div>
      {/* display sneakers end */}
    </>
  );
};

export default Home;
