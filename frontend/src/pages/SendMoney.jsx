import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const PORT = import.meta.env.VITE_PORT;

export const SendMoney = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const [amount, setAmount] = useState(0);

  return (
    <div className="bg-primary flex justify-center h-screen">
      <div className="h-full flex flex-col justify-center">
        <div className="border text-card-foreground max-w-md p-4 space-y-8 h-min w-96 bg-secondary shadow-lg rounded-lg  text-white">
          <div className="flex flex-col justify-center p-2">
            <div className="text-4xl text-center">Send Money</div>
          </div>

          <div className="flex items-center space-x-2 ">
            <div className=" w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <span className="text-2xl text-black">A</span>
            </div>
            <h3 className="text-2xl font-semibold">{name}</h3>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="amount"
              >
                Amount (in Rs)
              </label>
              <input
                type="number"
                className="text-black flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                id="amount"
                placeholder="Enter amount"
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <button
              onClick={() => {
                axios
                  .post(
                    `http://localhost:${PORT}/api/v1/account/transfer`,
                    {
                      to: id,
                      amount: amount,
                    },
                    {
                      headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                          "token"
                        )}`,
                      },
                    }
                  )
                  .then((response) => {
                    alert(response.data.message);
                  });
              }}
              className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white "
            >
              Initiate Transfer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
