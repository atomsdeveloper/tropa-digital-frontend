export const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-blue-600">Login</h1>
      <p className="mt-4 text-xl text-gray-700">
        Por favor, faça login para continuar
      </p>
      <a href="/dashboard" className="mt-6 text-blue-500 hover:underline">
        Ir para o Dashboard
      </a>
    </div>
  );
};
