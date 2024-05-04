import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://br4der-api.up.railway.app/product"
        );
        const getData = await response.json();

        setProducts(getData);
        setLoading(false);
        console.log(getData);

        const response2 = await fetch(
          "https://br4der-api.up.railway.app/category"
        );
        const getCatergory = await response2.json();

        setCategorys(getCatergory);
      } catch (error) {
        console.log("error:", error);
      }
    };
    fetchData();
  }, []);

  const formatPrice = (price) => {
    return price.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0, // memastikan bahwa tdk ada digit pecahan (koma) di belakang angka 0
    });
  };

  return (
    <section>
      <div className="flex font-semibold text-lg mx-8 my-5">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <p className="mx-2">&gt;</p>
        <Link to="/products" className="text-red-600 hover:underline">
          Products
        </Link>
      </div>
      {loading ? (
        <i>Loading Products...</i>
      ) : (
        <div className="flex">
          <div className="w-64 h-80 mt-6 flex justify-center">
            <div className="h-full w-48 flex flex-col text-center rounded-lg border border-solid border-red-700">
              <p className="font-semibold mt-3 mb-4">Select Brand</p>
              <ul>
                <li className="my-5 text-center">
                  <Link
                    to=""
                    className="px-11 py-1 rounded-lg border border-solid border-black hover:bg-red-600 hover:text-white hover:border-red-600"
                  >
                    Adidas
                  </Link>
                </li>
                <li className="my-5">
                  <Link
                    to=""
                    className="px-[52px] py-1 rounded-lg border border-solid border-black hover:bg-red-600 hover:text-white hover:border-red-600"
                  >
                    Nike
                  </Link>
                </li>
                <li className="my-5">
                  <Link
                    to=""
                    className="px-6 py-1 rounded-lg border border-solid border-black hover:bg-red-600 hover:text-white hover:border-red-600"
                  >
                    New Balance
                  </Link>
                </li>
                <li className="my-5">
                  <Link
                    to=""
                    className="px-[52px] py-1 rounded-lg border border-solid border-black hover:bg-red-600 hover:text-white hover:border-red-600"
                  >
                    Asics
                  </Link>
                </li>
                <li className="my-5">
                  <Link
                    to=""
                    className="px-[52px] py-1 rounded-lg border border-solid border-black hover:bg-red-600 hover:text-white hover:border-red-600"
                  >
                    Puma
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col min-h-[500px] items-center justify-center mt-16 gap-16">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:cols-3 gap-16">
              {products.map((product) => (
                <div
                  className="w-72 min-h-[10rem] bg-white text-gray-700 shadow-lg rounded-lg overflow-hidden"
                  key={product.id}
                >
                  {/* img */}
                  <img
                    className="w-full h-48 bg-white object-cover object-bottom p-5 hover:scale-[110%]"
                    src={product.imageUrl}
                    alt={product.name}
                  />

                  {/* Tag & Stock  */}
                  <div className="flex flex-col gap-3 py-3 px-5">
                    <div className="grid grid-cols-2 items-center gap-3">
                      {categorys.map((category) => {
                        // membuat kondisi
                        if (category.id === product.categoryId) {
                          return (
                            <button
                              className="px-2 py-1 rounded-full text-xs font-semibold text-[#F80F00] bg-transparent border-2 border-[#F80F00] hover:bg-[#F80F00] hover:text-white"
                              key={category.id}
                            >
                              {category.name}
                            </button>
                          );
                        }
                      })}
                      <div className="text-sm items-center text-end font-bold opacity-85">
                        10 Stock
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 mt-3">
                      {/* Price Name */}
                      <div className="font-bold text-xl">
                        {formatPrice(product.price)}
                      </div>
                      {/* Product Name */}
                      <div className="text-base">
                        <Link
                          className="hover:underline"
                          to={`/products/${product.id}`}
                        >
                          {product.name}
                        </Link>
                      </div>

                      {/* Atc & Buy Now */}
                      <div className="text-center grid grid-cols-2 gap-3 mt-8 mb-5">
                        <Link
                          className="py-2 rounded-lg font-semibold
                          bg-[#F80F00] hover:bg-[#950900] text-white hover:text-white
                          border border-[#F80F00] hover:border-transparent "
                          to={`/products/${product.id}`}
                        >
                          Buy Now
                        </Link>
                        <button
                          className="py-2 rounded-lg font-semibold
                          bg-transparent hover:bg-[#F80F00]
                          text-[#F80F00] hover:text-white
                          border border-[#F80F00] hover:border-transparent"
                          onClick={() => alert("Ordering not available yet")}
                        >
                          Add Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </section>
  );
};

export default Product;
