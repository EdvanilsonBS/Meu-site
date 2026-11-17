import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section>
      <h2>Contato</h2>
      <p>Email: edvanilsonbsantos@gmail.com</p>
      <p>
        Veja a <Link to="/">Home</Link> ou a página{" "}
        <Link to="/about">Sobre</Link>.
      </p>
    </section>
  );
}