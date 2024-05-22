import { useEffect, useState } from "react";
import { Button } from "./Button";

const PORT = import.meta.env.VITE_PORT;

import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:${PORT}/api/v1/user/bulk?filter=` + filter)
      .then((response) => {
        setUsers(response.data.user);
      });
  }, [filter]);

  return (
    <div className="mt-10">
      <div className="text-3xl">Users</div>
      <div className="mt-5">
        <input
          onChange={(e) => setFilter(e.target.value)}
          type="text"
          placeholder="Search Users.."
          className="w-full rounded-full p-2 border-2 border-secondary"
        />
      </div>

      <div>
        {users.map((user) => (
          <User user={user} />
        ))}
      </div>
    </div>
  );
};

const User = ({ user }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between mt-10 p-2">
      <div className="flex ">
        <div className="rounded-full h-12 w-12 text-white bg-secondary flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-lg">
            {user.firstName[0]}
          </div>
        </div>

        <div className="flex flex-col justify-center h-full">
          <div className="text-xl">
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <Button
          label={"Send Money"}
          onClick={() => {
            navigate(
              `/send?id=${user._id}&name=${user.firstName} ${user.lastName}`
            );
          }}
        ></Button>
      </div>
    </div>
  );
};
