/* eslint-disable array-callback-return */
import categories from "../../db.js";
import { Link } from "react-router-dom";
import styles from "./Piso.module.css";

function Piso({ type, id }) {
  let product;
  categories.map((category) =>
    category.products.map((productx) => {
      if (productx.id === id) product = productx;
    })
  );


  return (
    <div id={styles.main}>
      <section id={styles.containerProduct}>
        <h1 id={styles.productName}>
          Piso {type + " " + product.title + ", 120cm x 120cm x 2cm"}
        </h1>
        <img
          id={styles.floorImg}
          src={product.imgSrc}
          alt={"Imagem de um piso do modelo " + type + " cor " + product.title}
        />
        <div id={styles.containerProductDetails}>
          <p>⭐⭐⭐⭐⭐(150)</p>
          <p>Vendido e entregue por Ita Cerâmicas</p>
          <br />
          <p>
            <s>R$ {product.preco}</s>
          </p>
          <p>
            <strong>R$ {(parseFloat(product.preco) * 0.75).toFixed(2)}</strong>
          </p>
          <p>À vista ou no pix R$ 25 OFF</p>
          <br />
          <p>Em até 10x sem juros</p>
          <Link to="" className={styles.paymentOptions}>
            <p>Ver mais opções de pagamento</p>
          </Link>
        </div>
        <div id={styles.containerButtonComprar}>
          <button type="submit" id={styles.buttonComprar}>
            Comprar
          </button>
        </div>
      </section>
      <hr />
      <section id="descriptionProduct">
        <section className={styles.containerSection}>
          <strong>
            <h2 className={styles.descriptionTitles}>
              Diferenciais do Piso {type + " " + product.title}
            </h2>
          </strong>
        </section>
        <section className={styles.containerSection}>
          <h2 className={styles.descriptionTitles}>Confortável</h2>
          <p>
            Sensação de pisar nas nuvens, você, animais ou crianças não vão se
            machucar mesmo em quedas ou batidas realizadas sobre nosso piso.
          </p>
        </section>
        <section className={styles.containerSection}>
          <h2 className={styles.descriptionTitles}>Não escorrega</h2>
          <p>
            Mesmo o piso {type} sendo liso, ele não é nada escorregadio, devido
            a tecnologia Pro-Adhesion, que gera uma aderência muito forte por
            meio de micropartículas nano.
          </p>
        </section>
        <section className={styles.containerSection}>
          <h2 className={styles.descriptionTitles}>Não arranha</h2>
          <p>
            Os pisos da categoria {type} são extremamentes resistentes a
            abrasões por serem produzidos utilizando micropartículas nano de
            carbono na sua composição.
          </p>
        </section>
        <section className={styles.containerSection}>
          <h2 className={styles.descriptionTitles}>Facilita na limpeza</h2>
          <p>
            Pelo fato do piso {type} ser extremamente liso, facilita muito na
            hora da limpeza, basta apenas passar um pano úmido e qualquer
            vestígio de sujeira vai embora.
          </p>
        </section>
        <section className={styles.containerSection}>
          <h2 className={styles.descriptionTitles}>Resistente</h2>
          <p>
            Os pisos da categoria {type} são extremamentes resistentes a
            impactos por serem produzidos utilizando micropartículas nano de
            carbono na sua composição.
          </p>
        </section>
      </section>
      <hr />

      <section>
        <section className={styles.containerSection}>
          <p>
            <strong>Características:</strong>
          </p>
          <ul>
            <li>
              <p>Fabricante: Ita Cerâmicas</p>
            </li>
            <li>
              <p>Modelo: {product.idModel}</p>
            </li>
          </ul>
        </section>
        <br />
        <section className={styles.containerSection}>
          <p>
            <strong>Especificações:</strong>
          </p>
          <ul>
            <li>
              <p>Dimensões: 120 x 120 x 2 cm</p>
            </li>
            <li>
              <p>Peso liquído: 5 kg</p>
            </li>
            <li>
              <p>Tipo da arte: {type}</p>
            </li>
            <li>
              <p>Cor da arte: {product.title}</p>
            </li>
          </ul>
        </section>
      </section>
      <hr />
      <section className={styles.containerSection}>
        <p>
          <strong>Conteúdo da embalagem:</strong>
        </p>
        <ul>
          <li>
            <p>
              1 unidade do piso {type} {product.title}, 120cm x 120cm x 2cm
            </p>
          </li>
          <li>
            <p>Plástico inflado para proteção na viagem</p>
          </li>
          <li>
            <p>Caixa de papelão</p>
          </li>
        </ul>
      </section>
      <hr />
      <section id="reviewProduct">
        <section>
          <p>
            <strong>Marcos Barbosa Dósea</strong>
          </p>
          <p>(24/07/2022)</p>
          <p>⭐⭐⭐⭐⭐</p>
          <p>
            Melhor piso que já pisei na minha vida, com certeza irei
            recomenda-lo a todos meus amigos nas reuniões de Heineken!!!
          </p>
        </section>
        <br />
        <section>
          <p>
            <strong>Moisés Fagundes Junio</strong>
          </p>
          <p>(13/08/2022)</p>
          <p>⭐⭐⭐⭐⭐</p>
          <p>Sem condições, você é o cara.</p>
        </section>
      </section>
    </div>
  );
}

export default Piso;
