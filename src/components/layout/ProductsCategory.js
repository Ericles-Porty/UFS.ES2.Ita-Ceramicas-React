import ProductBox from "./ProductBox";
import styles from "./ProductsCategory.module.css";
import "./Header.js";

function ProductsCategory({ title, products }) {
  return (
    <>
      <section className={styles.sectionPisos}>
        <h2>{title}</h2>
        {products.map((product) => (
          <ProductBox
            className={styles.gridSectionPisos}
            to={product.to}
            imgSrc={product.imgSrc}
            preco={product.preco}
            title={product.title}
            key={product.id}
          />
        ))}
      </section>
      <hr />
    </>
  );
}
export default ProductsCategory;
