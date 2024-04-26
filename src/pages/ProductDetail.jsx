import { useState ,useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const params = useParams()
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://br4der-api.up.railway.app/product/${params.id}`);

                if (!response.ok) {
                    return setNotFound(true)
                }

                const getData = await response.json();
                
                setProduct(getData)
                setLoading(false)
            } catch (error) {
                console.log("Fetch Error:", error)
            }
        }
        fetchProduct()
    }, [params])

    if(notFound) {
        return (
            <h1 className="font-bold">Product is Not Found</h1>
        )
    }

    return(
        <section className="text-center">
            {loading ? (
                <i>Loading Product...</i>
            ) : (
                <div>
                    <img src={product.imageUrl} alt={product.name} className="w-96" />
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                </div>
            )}
        </section>
    )
}

export default ProductDetail;