export const Balance = ({ value }) => {
  return (
    <div className="flex border-b-2 border-secondary">
      <div className="mt-5 flex text-2xl">
        <div className="mr-5">Your Balance</div>
        <div className="font-bold">Rs {value}/-</div>
      </div>
    </div>
  );
};
