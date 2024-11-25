import React from 'react';
import { sort } from 'fast-sort';
import Link from 'next/link';

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: { revalidate: 10 },
  });

  const users: User[] = await res.json();

  console.log('test');

  const usersSorted: User[] = sort(users).asc(
    sortOrder === 'email' ? (u) => u.email : (u) => u.name,
  );

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>
            <Link href="/users?sortOrder=name">Name</Link>
          </th>
          <th>
            <Link href="/users?sortOrder=email">Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {usersSorted.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
