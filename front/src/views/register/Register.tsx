import { useContext } from "react";
import { RegisterContext } from "../../context/registerContext";
import { Link } from "react-router-dom";

export default function Register() {
  const context = useContext(RegisterContext);

  if (!context) {
    throw new Error("RegisterContext must be used within a RegisterProvider");
  }

  const {
    name,
    setName,
    lastName,
    setLastName,
    username,
    setUserName,
    email,
    setEmail,
    password,
    setPassword,
    submitHandler,
    message,
    error,
  } = context;

  return (
    <section className="border rounded-md px-8 py-6">
      <h1 className="flex justify-center text-4xl font-bold">Register Page</h1>
      <form
        onSubmit={submitHandler}
        className="flex flex-col items-center justify-center mt-8"
      >
        <div className="flex flex-col gap-4 w-80">
          <div className="flex flex-col">
            <label className="mb-2">Name: </label>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              className="rounded px-2 py-1"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2">Last Name: </label>
            <input
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              required
              className="rounded px-2 py-1"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2">User Name: </label>
            <input
              type="text"
              value={username}
              onChange={(event) => setUserName(event.target.value)}
              required
              className="rounded px-2 py-1"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2">Email: </label>
            <input
              type="email"
              value={email}
              placeholder="example@ex.com"
              onChange={(event) => setEmail(event.target.value)}
              required
              className="rounded px-2 py-1"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2">Password: </label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              className="rounded px-2 py-1"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-primary font-semibold mt-4 mb-4 px-4 py-2 border border-black rounded hover:bg-accents"
        >
          Sign Up
        </button>
      </form>

      <div className="flex flex-col items-center justify-center">
        {message && <p className="text-green-500 font-semibold">{message}</p>}
        {error && (
          <p className="text-red-600 font-semibold w-[20rem] text-center mb-2">
            {error}
          </p>
        )}

        <p className="flex gap-2">
          Already have an account?
          <Link to="/login" className="underline hover:text-accents">
            Sign In
          </Link>
        </p>
      </div>
    </section>
  );
}
