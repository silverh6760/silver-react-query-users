import { useUsers } from "../hooks/useUsers";

export const UserList = () => {
  const { data, isLoading, isError } = useUsers();

  if (isLoading) return <p>Loading users...</p>;
  if (isError) return <p>Error loading users</p>;

  return (
    <ul>
      {data.map((user: any) => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
};
