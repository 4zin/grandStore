import { useContext } from "react";
import { AuthContext } from "../../components/context/authContext";

export default function Home() {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthProvider must be used within a AuthProvider");
  }

  const { isAuthenticated, logout } = authContext;

  return (
    <section>
      <h1>This is the home page</h1>
      {isAuthenticated ? (
        <button
          onClick={logout}
          className="bg-cyan-300 px-4 py-2 rounded text-black text-lg font-semibold"
        >
          Logout
        </button>
      ) : null}
    </section>
  );
}
