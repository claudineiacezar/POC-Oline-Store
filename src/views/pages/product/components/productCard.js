import { Link } from "react-router-dom";
import { PRODUCT_DETAIL } from "../../../../application/navigation/CONSTANTS";

const Product = () => {
  return (
    <div class="card bg-light" style={{ width: "18rem" }}>
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Link class="btn btn-primary m-2" to={PRODUCT_DETAIL}>
          Detalhes
        </Link>
        <a href="#" class="btn btn-primary">
          Add to card
        </a>
      </div>
    </div>
  );
};

export default Product;
