import { useAuth } from "../../hooks/useAuth";

export function Profile() {
  const { user } = useAuth();

  return (
    <div>
      <h1>Profile</h1>
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Last Name: {user.lastName}</p>
          <p>Email: {user.email}</p>
          <p>Username: {user.username || user.userName}</p>
        </div>
      )}
    </div>
  );
}

export default Profile;
