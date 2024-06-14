import { useNavigate, useParams } from "react-router-dom";
import { UserDataContext } from "../App.jsx";
import { useContext } from "react";
import products from "../data/products.js";

function ViewProductPage() {
  const navigate = useNavigate();
  const context = useContext(UserDataContext);
  const params = useParams();

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>{products[params.id - 1].name}</h2>
        <p>{products[params.id - 1].description}</p>
      </div>

      <div className="product-promotion-box">
        <h2>
          คุณคือสมาชิกในระดับ {context.user.level} ดังนั้นคุณได้สิทธิพิเศษลด 50%
        </h2>
        <button onClick={() => alert("🥳🥳🥳🥳")}>กดรับสิทธิ</button>
      </div>

      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
