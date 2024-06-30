import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export function SendMoney() {
  const [searchParams] = useSearchParams();
  const [amount, setAmount] = useState(0);

  return (
    <div className="flex justify-center h-screen bg-gray-100">
      <div className="h-full flex flex-col justify-center">
        <div className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
          <div className="flex flex-col p-4 ">
            <h2 className="text-3xl font-medium text-center">Send Money To</h2>
          </div>
          <div className="p-6">
            <div className="flex items-center space-x-4 my-6">
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-2xl text-white">
                  {searchParams.get("name")[0]}
                </span>
              </div>
              <h3 className="text-2xl font-semibold">
                {searchParams.get("name") + " " + searchParams.get("lastname")}
              </h3>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="amount"
                >
                  Amount (in Rs)
                </label>
                <input
                  type="number"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  id="amount"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                />
              </div>
              <button
                className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white"
                onClick={async () => {
                  await axios
                    .post(
                      "http://localhost:3000/api/v1/accounts/transactions",
                      {
                        amount,
                        to: searchParams.get("id"),
                      },
                      {
                        headers: {
                          authorization:
                            "Bearer " + localStorage.getItem("token"),
                        },
                      }
                    )
                    .then(() => {
                      setAmount(0);
                      alert("Transfer successful!");
                    });
                }}
              >
                Initiate Transfer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
