import { useNavigate, useParams} from "react-router-dom";
import { useUser } from "../components/UseContext";
import products from "../data/products";
import React from "react";


function ViewProductPage() {
  const navigate = useNavigate();
  const { level } = useUser();
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

if (!product) {
  return <p>Product not found!</p>
}

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <img src={product.image} alt={product.name} width="" height="" />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h3>Price: {product.price}</h3>
      </div>

      <div className="product-promotion-box">
        <h2>คุณคือสมาชิกในระดับ {level} ดังนั้นคุณได้สิทธิพิเศษลด 50%</h2>
        <button onClick={() => alert("🥳🥳🥳🥳")}>กดรับสิทธิ</button>
      </div>

      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
