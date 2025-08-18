import Button from "./Button.jsx";

export default function ProjectsSideBar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-red-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-red-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-700 hover:bg-red-300";
          if (project.id === selectedProjectId) {
            cssClasses += " bg-red-200 text-stone-800";
          } else {
            cssClasses += " text-stone-400";
          }

          return (
            <li key={project.id}>
              <button className={cssClasses} onClick={() => onSelectProject(project.id)}>
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
