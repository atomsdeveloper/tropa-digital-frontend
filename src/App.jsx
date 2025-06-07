// Routes
import { MainRouter } from "./routes/route";

// Styled
import "./styles/globals.css";

// Context
import { UserProvider } from "./contexts/UserContext";

export function App() {
  return (
    <UserProvider>
      <MainRouter />
    </UserProvider>
  );
}
