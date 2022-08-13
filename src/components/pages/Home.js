import styles from "./Home.module.css";
import ProductsCategory from "../layout/ProductsCategory";
import categories from "../../db.js";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Home() {
  const [filteredData, setFilteredData] = useState([]);
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = categories
      .map((category) => {
        return {
          title: category.title,
          products: category.products.filter((product) => {
            return product.title
              .toLowerCase()
              .includes(searchWord.toLowerCase());
          }),
        };
      })
      .filter((category) => {
        return category.products.length > 0;
      });
    setFilteredData(newFilter);
  };

  return (
    <main id="products">
      <div id={styles.searchBar}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Pesquisar"
          onChange={handleFilter}
        />
        <div id={styles.searchButtonContainer}>
          <FontAwesomeIcon id={styles.searchButton} icon={faMagnifyingGlass} />
        </div>
      </div>
      {filteredData.length === 0
        ? categories.map((category, index) => (
            <ProductsCategory
              title={category.title}
              products={category.products}
              key={index}
            />
          ))
        : filteredData.map((category, index) => (
            <ProductsCategory
              title={category.title}
              products={category.products}
              key={index}
            />
          ))}
    </main>
  );
}

export default Home;
