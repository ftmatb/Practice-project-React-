export default function Button({ children, ...props }) {
  return (
    <button className="px-4 py-2 text-xs md:text-base rounded-md bg-red-700 text-red-400 hover:bg-red-600 hover:text-red-100" {...props}>
      {children}
    </button>
  );
}
