import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://br4der-api.up.railway.app/product"
        );
        const getData = await response.json();

        setProducts(getData);
        setLoading(false);
        console.log(getData);
      } catch (error) {
        console.log("error: ", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="">
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
          <div className="w-72 h-80 mt-6 flex justify-center">
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
              {products.map((product) => {
                return (
                  <div className="card" key={product.id}>
                    {/* img */}
                    <img
                      className="img-card p-5"
                      src={product.imageUrl}
                      alt={product.name}
                    />

                    {/* Tag & Stock  */}
                    <div className="flex flex-col gap-3 py-3 px-5">
                      <div className="grid grid-cols-2 items-center gap-3">
                        {/* 
                                <div className="text-sm text-end font-semibold line-through text-gray-500">Rp500.000</div>
                                <div className="text-xl font-semibold text-red-700">60%</div>
                                    */}
                        <button className="tag">Adidas</button>
                        <div className="text-sm items-center text-end font-bold opacity-85">
                          120 Stock
                        </div>
                      </div>

                      <div className="flex flex-col gap-3 mt-3">
                        {/* Price Name */}
                        <div className="price">Rp 1.360.000</div>
                        {/* Product Name */}
                        <div className="product-title">
                          <Link className="hover:underline" to={`/products/${product.id}`}>
                            {product.name}
                          </Link>
                        </div>
                        {/* Tag
                            <div className="flex items-center gap-2 mt-5">
                                <button className="tag">
                                    Adidas
                                </button>
                                <button className="tag">
                                    Low
                                </button>
                            </div> */}

                        {/* Atc & Buy Now */}
                        <div className="grid grid-cols-2 gap-3 mt-8 mb-5">
                          <button className="primary-button">
                            Beli Sekarang
                          </button>
                          <button className="secondary-button">
                            Keranjang
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  // <div key={product.id}>
                  //   <img
                  //     src={product.imageUrl}
                  //     alt={product.name}
                  //     className="w-96"
                  //   />
                  //   <h2 className="text-black hover:underline">
                  //     <Link to={`/products/${product.id}`}>{product.name}</Link>
                  //   </h2>
                  // </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </section>
  );
};

export default Product;
