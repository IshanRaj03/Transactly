export function ButtonHomePage({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="w-64 text-primary bg-secondary hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xl pr-5 pl-5 pt-3 pb-3 mb-2 "
    >
      {label}
    </button>
  );
}
