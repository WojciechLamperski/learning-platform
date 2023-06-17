export default function Navigation({ title, slug, lessonId, modules }) {
  return (
    <aside className="shadow-md bg-white px-1">
      <h1 className="text-2xl py-4 px-6 font-bold">{title}</h1>

      {modules &&
        modules.map((module) => (
          <div key={module.id} className="relative">
            <h2 className="text-xl py-4 px-6 font-bold">{module.title}</h2>
            <ul className="relative">
              {module.lessons &&
                module.lessons.map((lesson) => (
                  <li key={lesson.id} className="relative">
                    <a
                      className={`flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out ${
                        lessonId === lesson.id ? "bg-gray-100" : ""
                      }`}
                      href={`/courses/${slug}/lessons/${lesson.id}`}
                    >
                      {lesson.title} {module.isLocked ? "🔒" : ""}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        ))}
    </aside>
  );
}
