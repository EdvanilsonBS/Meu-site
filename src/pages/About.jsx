import { Link } from "react-router-dom";

export default function About() {
  return (
    <section>
      <h2>Sobre</h2>
      <p>Este projeto foi expeciamente criado para para praticar o React Router.
        Seu criado sou eu "Edivanilson Bezerra", mas apelidado de "Edi"
      </p>
      <p>
        Voltar para a <Link to="/">Home</Link> ou ir para{" "}
        <Link to="/contact">Contato</Link>.
      </p>
    </section>
  );
}