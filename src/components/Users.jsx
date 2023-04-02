import React from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

function Users() {
  const [users, setUsers] = React.useState();
  const axiosPrivate = useAxiosPrivate();

  React.useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    async function getUsers() {
      try {
        const response = await axiosPrivate.get("/users", {
          signal: controller.signal,
        });
        console.log(response.data);
        isMounted && setUsers(response.data);
      } catch (err) {
        console.error(err);
      }
    }

    getUsers();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <article>
      <h2>Users List</h2>
      {users?.length ? (
        <ul>
          {users.map((user, i) => (
            <li key={i}>{user?.username}</li>
          ))}
        </ul>
      ) : (
        <p>No users to dislay</p>
      )}
    </article>
  );
}

export default Users;