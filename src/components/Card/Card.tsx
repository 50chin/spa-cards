import { useDispatch } from "react-redux";
import { toggleLike, deleteProduct } from "../../Redux/slice/productSlice";
import { Link } from "react-router-dom";
import { CardProps } from "../../types/Card";

import styles from "./Card.module.scss";

export const Card: React.FC<CardProps> = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <article className={styles.card}>
      {/* <Link to={`/products/${product.id}`}> */}
        <img src={product.images} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.description.substring(0, 100)}...</p>
      {/* </Link> */}
      <button onClick={() => dispatch(toggleLike(product.id))}>
        {product.liked ? "Unlike" : "Like"}
      </button>
      <button onClick={() => dispatch(deleteProduct(product.id))}>
        Delete
      </button>
    </article>
  );
};
