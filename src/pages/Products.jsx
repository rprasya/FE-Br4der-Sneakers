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
      <div className="font-bold text-4xl mb-6">Products Page</div>
      {loading ? (
        <i>Loading Products...</i>
      ) : (
        <div>
          {products.map((product) => {
            return (
              <div key={product.id}>
                <h2 className="text-black hover:underline">
                  <Link to={`/products/${product.id}`}>{product.name}</Link>
                </h2>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Product;
