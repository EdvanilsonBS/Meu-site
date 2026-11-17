import { useParams, Link } from "react-router-dom";

const users = {
  1: { nome: "Ana Souza", cargo: "Desenvolvedora" },
  2: { nome: "Carlos Lima", cargo: "Designer" },
  3: { nome: "Edivanilson Bezerra", cargo: "Analista de Dados" },
};

export default function User() {
  const { id } = useParams();
  const user = users[id];

  if (!user) {
    return (
      <section>
        <h2>Usuário não encontrado</h2>
        <p>Não existe usuário com o id "{id}".</p>
        <Link to="/">Voltar para a Home</Link>
      </section>
    );
  }

  return (
    <section>
      <h2>Perfil do usuário {id}</h2>
      <p><strong>Nome:</strong> {user.nome}</p>
      <p><strong>Cargo:</strong> {user.cargo}</p>
      <Link to="/">Voltar para tela de inicio</Link>
    </section>
  );
}