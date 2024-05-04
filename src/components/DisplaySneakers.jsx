/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect } from "react";

const DisplaySneakers = () => {
  const [products, setProducts] = useState([]);
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://br4der-api.up.railway.app/product"
        );
        const getData = await response.json();

        // Random Urutan Data
        const shuffledData = getData.sort(() => Math.random() - 0.5);

        // Membatasi 6 Data Pertama setelah di Random
        const limitedData = shuffledData.slice(0, 6);

        setProducts(limitedData);

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
    <>
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
        <div className="flex flex-col items-center mb-16">
          <Link to="/products" className="py-2 rounded-lg font-semibold bg-transparent hover:bg-[#F80F00] text-[#F80F00] hover:text-white border border-[#F80F00] hover:border-transparent px-8">
            Muat Lebih Banyak
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DisplaySneakers;
