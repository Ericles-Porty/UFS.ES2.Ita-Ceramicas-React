import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import styles from "./index.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes id={styles.main} />
      <Footer />
    </Router>
  );
}

export default App;
