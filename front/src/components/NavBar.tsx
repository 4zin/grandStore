import { Link } from "react-router-dom";
import { Button } from "./Button";
import { LogOutIcon, LoginIcon, ProfileIcon } from "./Icons";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";

export function NavBar() {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthProvider must be used within a AuthProvider");
  }

  const { isAuthenticated, logout } = authContext;

  return (
    <header className="flex justify-between items-center bg-gray-800 text-white p-4 w-full fixed top-0">
      <Link to="/">
        <h1 className="text-3xl">Grand Store</h1>
      </Link>
      {isAuthenticated ? (
        <div className="flex justify-center gap-4 mr-4">
          <Button text="Profile" link="/profile" icon={<ProfileIcon />} />
          <Button
            text="Logout"
            onClick={logout}
            icon={<LogOutIcon />}
            link=""
          />
        </div>
      ) : (
        <Button text="Sign In" link="/login" icon={<LoginIcon />} />
      )}
    </header>
  );
}
