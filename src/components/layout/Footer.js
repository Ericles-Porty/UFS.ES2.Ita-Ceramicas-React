import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Footer.module.css";
import ButtonSubmit from "./ButtonSubmit.js";

function Footer() {
  return (
    <footer id={styles.footer}>
      <button
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        id={styles.scrollUpButton}
      >
        <FontAwesomeIcon icon={faCircleArrowUp} />
      </button>
      <p id="contact">Contato</p>
      <form
        id={styles.formComments}
        action="mailto:ericlesdsantos@gmail.com"
        method="POST"
        name="EmailForm"
      >
        <div className={styles.formBlock}>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" id="name" />
        </div>

        <div className={styles.formBlock}>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@email.com"
            required
          />
        </div>

        <div className={styles.formBlock}>
          <label htmlFor="message">Mensagem:</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            required
          ></textarea>
        </div>
        <ButtonSubmit />
      </form>

      <p>Todos os direitos reservados</p>
      <p>&copy;Ita Cerâmicas - 2022</p>
    </footer>
  );
}
export default Footer;
