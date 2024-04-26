import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    <section className="text-center">
      <div className="font-bold text-3xl my-5">All Sneakers</div>
      {loading ? (
        <i>Loading Products...</i>
      ) : (
        <div className="flex flex-col min-h-[500px] items-center justify-center mt-16 gap-16">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:cols-3 gap-16">
            {products.map((product) => {
              return (
                <div key={product.id}>
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-96"
                  />
                  <h2 className="text-black hover:underline">
                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                  </h2>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default Product;
