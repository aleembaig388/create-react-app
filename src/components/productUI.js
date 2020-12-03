import { Link } from "react-router-dom";
function ProductUI(props) {
  const { product } = props;
  return (
    <p className="shadow">
      <span className="font-bold">{product.name}</span>
      <img src={product.avatar} alt="" />
      <Link to={"/product/" + product.id}>See more deals</Link>
    </p>
  );
}

export default ProductUI;
