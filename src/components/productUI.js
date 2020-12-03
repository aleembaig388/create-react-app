import { Link } from "react-router-dom";
function ProductUI(props) {
  const { product } = props;
  return (
    <p className="shadow">
      <h3 className="font-bold">{product.name}</h3>
      <img src={product.avatar} alt="" />
      <Link to={"/product/" + product.id}>See more deals</Link>
    </p>
  );
}

export default ProductUI;
