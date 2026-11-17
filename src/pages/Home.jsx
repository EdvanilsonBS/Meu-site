import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section>
      <h2>Seja muito bem-vindo(a)!</h2>
      <p>Esta página foi criada para testar conhecimentos, experiências e informações. Teste a pagina com moderação</p>
      <p>
        Conheça a <Link to="/about">página Sobre</Link> ou entre em{" "}
        <Link to="/contact">contato</Link>.
      </p>
    </section>
  );
}