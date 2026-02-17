import { useUsers } from "../hooks/useUsers";

export const UserList = () => {
  const { data, isLoading, isError } = useUsers();

  if (isLoading)
    return <p className="text-center text-gray-500 mt-4">Loading users...</p>;

  if (isError)
    return (
      <p className="text-center text-red-500 mt-4">Failed to load users.</p>
    );

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">
              #
            </th>
            <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">
              Name
            </th>
            <th className="text-left px-6 py-3 text-sm font-semibold text-gray-600">
              Email
            </th>
          </tr>
        </thead>

        <tbody>
          {data?.map((user: any, index: number) => (
            <tr key={user.id} className="border-t hover:bg-gray-50 transition">
              <td className="px-6 py-4 text-gray-700">{index + 1}</td>
              <td className="px-6 py-4 font-medium text-gray-800">
                {user.name}
              </td>
              <td className="px-6 py-4 text-gray-600">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {data?.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No users found.</p>
      )}
    </div>
  );
};
