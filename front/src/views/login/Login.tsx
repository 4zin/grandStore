/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../../components/context/loginContext";
import { AuthContext } from "../../components/context/authContext";

export default function Login() {
  const loginContext = useContext(LoginContext);
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  if (!loginContext) {
    throw new Error("LoginContext must be used within a LoginProvider");
  }

  if (!authContext) {
    throw new Error("AuthProvider must be used within a AuthProvider");
  }

  const {
    email,
    setEmail,
    password,
    setPassword,
    loginHandler,
    error,
    setError,
  } = loginContext;
  const { login } = authContext;
  // const [error, setError] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await loginHandler(event);

      if (response && response.token) {
        localStorage.setItem("token", response.token);
        login(response.user);
        navigate("/home");
        setEmail("");
        setPassword("");
      }
    } catch (error: any) {
      setError(error.response?.data?.message);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center border rounded-md p-8 mt-12">
      <h1 className="flex justify-center text-4xl font-bold">Grand Store</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center mt-8"
      >
        <div className="flex flex-col gap-4 w-80">
          <div className="flex flex-col">
            <label>Email: </label>
            <input
              type="text"
              value={email}
              autoFocus
              placeholder="Enter your email"
              onChange={(event) => setEmail(event.target.value)}
              required
              className="rounded px-2 py-1"
            />
          </div>

          <div className="flex flex-col">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={(event) => setPassword(event.target.value)}
              required
              className="rounded px-2 py-1"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-cyan-300 text-black font-bold mt-4 mb-4 px-4 py-2 border border-black rounded hover:bg-cyan-400"
        >
          Sign In
        </button>
      </form>

      <div className="flex flex-col items-center justify-center">
        {error && <p className="text-red-600 font-semibold">{error}</p>}
        <p className="flex gap-2">
          Don't have an account?
          <Link to="/register" className="underline hover:text-cyan-300">
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
}
