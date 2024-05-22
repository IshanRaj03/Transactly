import React from "react";

const Features = () => {
  return (
    <div className=" py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className=" text-center p-6 border rounded-lg shadow-lg bg-home2">
          <div className="icon-security text-4xl mb-4"></div>
          <div className="text-xl font-bold mb-2">Secure Transactions</div>
          <div>
            Your transactions are protected with top-tier security measures.
          </div>
        </div>
        <div className=" text-center p-6 border rounded-lg shadow-lg bg-home2">
          <div className="icon-instant text-4xl mb-4"></div>
          <div className="text-xl font-bold mb-2">Instant Transfers</div>
          <div>Send money instantly to anyone.</div>
        </div>
        <div className=" text-center p-6 border rounded-lg shadow-lg bg-home2">
          <div className="icon-balance text-4xl mb-4"></div>
          <div className="text-xl font-bold mb-2">Random Balance</div>
          <div>Get a surprise balance when you sign up.</div>
        </div>
        <div className=" text-center p-6 border rounded-lg shadow-lg bg-home2">
          <div className="icon-interface text-4xl mb-4"></div>
          <div className="text-xl font-bold mb-2">User-Friendly Interface</div>
          <div>Simple and intuitive design for easy navigation.</div>
        </div>
      </div>
    </div>
  );
};

export default Features;
