export const Dash = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-green-600">Dashboard</h1>
      <p className="mt-4 text-xl text-gray-700">
        Bem-vindo ao seu painel de controle
      </p>
      <a href="/" className="mt-6 text-blue-500 hover:underline">
        Voltar para a página inicial
      </a>
    </div>
  );
};
