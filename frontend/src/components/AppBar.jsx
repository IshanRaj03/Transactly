import axios from "axios";
import { useEffect, useState } from "react";

const PORT = import.meta.env.VITE_PORT;

export const AppBar = () => {
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    const data = async () => {
      const res = await axios.get(
        `http://localhost:${PORT}/api/v1/account/firstName`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setFirstName(res.data.firstName);
    };
    data();
  });

  return (
    <div className="shadow h-14 flex justify-between bg-secondary text-white border-b-2 border-gray-500">
      <div className="flex flex-col justify-center h-full ml-4 text-2xl font-bold">
        Transactly
      </div>
      <div className="flex">
        <div className="flex flex-col justify-center h-full mr-4">
          Hello {firstName}
        </div>
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl text-black">
            {firstName.charAt(0)}
          </div>
        </div>
      </div>
    </div>
  );
};
