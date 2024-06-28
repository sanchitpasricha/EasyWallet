/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button } from "../components/Button";

export function Users() {
  const [users, setUsers] = useState([
    {
      firstName: "Sanchit",
      lastName: "Pasricha",
      _id: 1,
    },
  ]);

  return (
    <div>
      <div className="font-bold text-md my-4">Users</div>
      <div className="my-2">
        <input
          type="text"
          placeholder="Search Users..."
          className="w-full p-2 text-sm border-solid border-2 border-black-500 rounded-md"
        ></input>
      </div>
      <div className="py-4">
        {users.map((user) => (
          <User key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

function User({ user }) {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center h-ful">
        <Button label={"Send Money"} />
      </div>
    </div>
  );
}
