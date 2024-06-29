/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import axios from "axios";

export function Users() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/users/bulk?filter=" + filter)
      .then((response) => {
        setUsers(response.data.user);
      });
  }, [filter]);

  return (
    <div>
      <div className="font-bold text-md my-4">Users</div>
      <div className="my-2">
        <input
          type="text"
          placeholder="Search Users..."
          className="w-full p-2 text-sm border-solid border-2 border-black-500 rounded-md"
          onChange={(e) => {
            setFilter(e.target.value);
          }}
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
    <div className="flex justify-between mt-6">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstname[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
          <div>
            {user.firstname} {user.lastname}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center h-ful">
        <Button label={"Send Money"} />
      </div>
    </div>
  );
}
