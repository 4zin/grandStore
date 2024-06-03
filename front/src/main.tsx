import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { RegisterProvider } from "./components/context/registerContext.tsx";
import { LoginProvider } from "./components/context/loginContext.tsx";
import { AuthProvider } from "./components/context/authContext.tsx";
import { CreateProvider } from "./components/context/createContext.tsx";
import { ProductsProvider } from "./components/context/productsContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RegisterProvider>
    <LoginProvider>
      <AuthProvider>
        <CreateProvider>
          <ProductsProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ProductsProvider>
        </CreateProvider>
      </AuthProvider>
    </LoginProvider>
  </RegisterProvider>
);
