import { Link } from "react-router-dom";
import styles from "./ProductBox.module.css";
import ButtonComprar from "./ButtonComprar";

function ProductBox({ to, imgSrc, preco, title }) {
  return (
    <Link to={to} className={styles.containerPiso}>
      <h3>{title}</h3>
      <img src={imgSrc} className={styles.imgBox} alt="" />
      <div className={styles.info}>
        <p>
          <s>R$ {preco}</s>
        </p>
        <p>R$ {(parseFloat(preco) * 0.75).toFixed(2)}</p>
        <p>No pix</p>
        <ButtonComprar className={styles.button} />
      </div>
    </Link>
  );
}
export default ProductBox;
