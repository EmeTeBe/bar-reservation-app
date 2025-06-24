import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen bg-neutral-900 text-white">
        <AppRoutes />
      </main>
    </BrowserRouter>
  );
}

export default App;
