import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      {/* GLOBAL TOAST SYSTEM */}
      <Toaster position="top-right" />

      {/* APP ROUTES */}
      <AppRoutes />
    </>
  );
}

export default App;