import { useState } from "react";
import { useCreateUser } from "../hooks/useCreateUser";

export const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { mutate, isPending } = useCreateUser();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    mutate({ name, email });

    setName("");
    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-4 items-center"
    >
      <input
        type="text"
        placeholder="Name"
        className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition disabled:opacity-50"
      >
        {isPending ? "Adding..." : "Add User"}
      </button>
    </form>
  );
};
