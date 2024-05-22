import { useEffect, useState } from "react";
import { AppBar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import axios from "axios";

const PORT = import.meta.env.VITE_PORT;

export const Dashboard = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const data = async () => {
      const res = await axios.get(
        `http://localhost:${PORT}/api/v1/account/balance`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setBalance(res.data.balance);
    };
    data();
  });

  return (
    <>
      <AppBar></AppBar>
      <div className="bg-primary p-5">
        <Balance value={balance}></Balance>
        <Users></Users>
      </div>
    </>
  );
};
