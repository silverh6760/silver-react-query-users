import { AddUser } from "./components/AddUser";
import { UserList } from "./components/UserList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-10">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          User Management
        </h1>

        <AddUser />

        <div className="mt-8">
          <UserList />
        </div>
      </div>
    </div>
  );
}

export default App;
