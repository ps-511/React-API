import { useEffect, useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import Search from "./components/Search";
import { fetchUsers } from "./services/api";
import { alignPropType } from "react-bootstrap/esm/types";
function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetchUsers()
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch users");
        setLoading(false);
      });
  }, []);
  const deleteUser = (id) => {
    const filteredUsers = users.filter(
      (user) => user.id !== id
    );
    setUsers(filteredUsers);
    alert("User deleted");
  };
  const filteredData = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
  if (loading) {
    return <h1 className="message">Loading...</h1>;
  }
  if (error) {
    return <h1 className="message">{error}</h1>;
  }
  return (
    <div className="container">
      <h1 className="title">
        User Management
      </h1>
      <Search
        search={search}
        setSearch={setSearch}
      />
      <div className="card-container">
        {
          filteredData.length > 0 ? (
            filteredData.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                deleteUser={deleteUser}
              />
            ))
          ) : (
            <h2>No Users Found</h2>
          )
        }
      </div>
    </div>
  );
}
export default App;