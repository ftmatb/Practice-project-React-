export default function ProjectsSideBar() {
  return (
    <aside className="w-1/3 px-8 py-16 bg-red-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-red-200">
        Your Projects
      </h2>
      <div>
        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-red-700 text-red-400 hover:bg-red-600 hover:text-red-100">
          + Add Project
        </button>
      </div>
      <ul></ul>
    </aside>
  );
}
