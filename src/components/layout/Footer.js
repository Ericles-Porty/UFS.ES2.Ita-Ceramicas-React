import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Footer.module.css";
import ButtonSubmit from "./ButtonSubmit.js";

function Footer() {
  return (
    <>
      <button
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        id={styles.scrollUpButton}
      >
        <FontAwesomeIcon icon={faCircleArrowUp} />
      </button>
      <footer id={styles.footer}>
        <section className={styles.blockContainer} id={styles.aboutBlockContainer}>
          <h2>Sobre nós</h2>
          <p>Somos uma Startup no ramo de pisos cerâmicos de luxo</p>
          <p>Mas também temos pisos acessíveis para todos</p>
          <p>Todos os pisos são feitos a mão</p>
          <p>Amamos o que fazemos</p>
          <p>Nosso ambiente é agradável, descontraído e aconchegante</p>
          <p>Somos uma empresa pet-friendly</p>
          <p>Não agredimos a natureza na fabricação dos nossos produtos</p>
          <p>Não aceitamos qualquer tipo de preconceito</p>

          <p>Venha nós fazer uma visita</p>
        </section>

        <section className={styles.blockContainer} id={styles.formBlockContainer}>
          <h2 id="contact">Contato</h2>
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
          <p>&copy;Ita Cerâmicas - 2022 - Éricles dos Santos Cunha</p>
        </section>
        <section className={styles.blockContainer} id={styles.locationBlockContainer}>
          <h2>Localização</h2>
          <p>País: Brasil</p>
          <p>Estado: Sergipe</p>
          <p>Cidade: Itabaiana</p>
          <p>Bairro: Marianga</p>
          <p>Rua: Ita Cerâmicas</p>
          <p>Nº: 100</p>
          <p>CEP: 49.000-000</p>
          <p>+55 (79) 9 9999-9999</p>
        </section>
      </footer>
    </>
  );
}
export default Footer;
