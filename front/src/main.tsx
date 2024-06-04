import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { RegisterProvider } from "./context/registerContext.tsx";
import { LoginProvider } from "./context/loginContext.tsx";
import { AuthProvider } from "./context/authContext.tsx";
import { CreateProvider } from "./context/createContext.tsx";
import { ProductsProvider } from "./context/productsContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <RegisterProvider>
      <LoginProvider>
        <ProductsProvider>
          <CreateProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </CreateProvider>
        </ProductsProvider>
      </LoginProvider>
    </RegisterProvider>
  </AuthProvider>
);
