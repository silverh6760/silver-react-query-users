import { AddUser } from "./components/AddUser";
import { UserList } from "./components/UserList";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>User Management</h1>
      <AddUser />
      <UserList />
    </div>
  );
}

export default App;
