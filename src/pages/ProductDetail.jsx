import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../components/Footer";

const ProductDetail = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [categorys, setCategorys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://br4der-api.up.railway.app/product/${params.id}`
        );

        if (!response.ok) {
          return setNotFound(true);
        }

        const getData = await response.json();
        setProduct(getData);
        setLoading(false);

        const response2 = await fetch(
          "https://br4der-api.up.railway.app/category"
        );
        const getCategory = await response2.json();

        setCategorys(getCategory);
      } catch (error) {
        console.log("Fetch Error:", error);
      }
    };
    fetchProduct();
  }, [params]);

  if (notFound) {
    return <h1 className="font-bold">Product is Not Found</h1>;
  }

  const formatPrice = (price) => {
    return price.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0, // memastikan bahwa tdk ada digit pecahan (koma) di belakang angka 0
    });
  };

  return (
    <section className="text-center">
      <div className="flex font-semibold text-lg mx-8 mt-5">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <p className="mx-2">&gt;</p>
        <Link to="/products" className="hover:underline">
          Products
        </Link>
        <p className="mx-2">&gt;</p>
        {categorys.map((category) => {
          if (category.id === product.categoryId) {
            return (
              <Link
                to=""
                key={category.id}
                className="text-[#F80F00] hover:underline"
              >
                {category.name}
              </Link>
            );
          }
        })}
      </div>
      {loading ? (
        <i>Loading Product...</i>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-16">
            <div className="w-[707px] flex flex-col justify-center items-center">
              <img src={product.imageUrl} alt={product.name} className="w-96" />
            </div>
            <div className="w-[700px] h-[497px] flex flex-col justify-center items-center">
              <div className="text-left">
                <p className="font-bold text-xl mb-2">{product.name}</p>
                <p className=" text-xl mb-12">{formatPrice(product.price)}</p>
                <p className="text-xl font-bold mb-6">Information Sneaker</p>
                <p className="mb-16">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  debitis cum rem maiores nemo non, a aperiam veritatis porro
                  ipsam ipsa cumque fugit dolor ducimus quisquam rerum adipisci,
                  alias corrupti.
                </p>
                <p className="text-xl font-bold mb-5">Size Sneaker</p>
                <ul className="flex gap-2 mb-16">
                  <li className="w-9 text-center p-1 border border-solid border-[#F80F00] rounded-md hover:text-white hover:bg-[#F80F00] hover:cursor-pointer">
                    38
                  </li>
                  <li className="w-9 text-center p-1 border border-solid border-[#F80F00] rounded-md hover:text-white hover:bg-[#F80F00] hover:cursor-pointer">
                    39
                  </li>
                  <li className="w-9 text-center p-1 border border-solid border-[#F80F00] rounded-md hover:text-white hover:bg-[#F80F00] hover:cursor-pointer">
                    40
                  </li>
                  <li className="w-9 text-center p-1 border border-solid border-[#F80F00] rounded-md hover:text-white hover:bg-[#F80F00] hover:cursor-pointer">
                    41
                  </li>
                  <li className="w-9 text-center p-1 border border-solid border-[#F80F00] rounded-md hover:text-white hover:bg-[#F80F00] hover:cursor-pointer">
                    42
                  </li>
                  <li className="w-9 text-center p-1 border border-solid border-[#F80F00] rounded-md hover:text-white hover:bg-[#F80F00] hover:cursor-pointer">
                    43
                  </li>
                  <li className="w-9 text-center p-1 border border-solid border-[#F80F00] rounded-md hover:text-white hover:bg-[#F80F00] hover:cursor-pointer">
                    44
                  </li>
                  <li className="w-9 text-center p-1 border border-solid border-[#F80F00] rounded-md hover:text-white hover:bg-[#F80F00] hover:cursor-pointer">
                    45
                  </li>
                </ul>
                <p className="text-xl font-bold mb-5">Atur Jumlah</p>
                <div className="flex">
                  <div className="flex text-center mr-8 gap-3">
                    <button
                      className="text-[#F80F00] px-3 rounded-lg hover:bg-[#F80F00] hover:text-white"
                      onClick={() => {
                        setCount(count - 1);
                      }}
                    >
                      -
                    </button>
                    <p>{count}</p>
                    <button
                      className="text-[#F80F00] px-3 rounded-lg hover:bg-[#F80F00] hover:text-white"
                      onClick={() => {
                        setCount(count + 1);
                      }}
                    >
                      +
                    </button>
                  </div>
                  <div className="flex gap-4">
                    <button
                      className="text-[#F80F00] px-6 border border-solid border-[#F80F00] rounded-lg hover:text-white hover:bg-[#F80F00]"
                      onClick={() => alert("Ordering not available yet")}
                    >
                      Add Cart
                    </button>
                    <button className="text-[#F80F00] px-6 border border-solid border-[#F80F00] rounded-lg hover:text-white hover:bg-[#F80F00]">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </section>
  );
};

export default ProductDetail;
