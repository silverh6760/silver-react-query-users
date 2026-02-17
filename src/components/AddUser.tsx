import { useState } from "react";
import { useCreateUser } from "../hooks/useCreateUser";

export const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { mutate, isPending } = useCreateUser();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({ name, email });
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">{isPending ? "Adding..." : "Add User"}</button>
    </form>
  );
};
