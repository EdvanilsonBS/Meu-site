import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section>
      <h2>404 - Página não encontrada</h2>
      <p>A página que você procura não existe.</p>
      <Link to="/">Voltar para a Home</Link>
    </section>
  );
}