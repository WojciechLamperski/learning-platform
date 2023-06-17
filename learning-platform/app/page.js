import Link from "next/link";

// Get all the courses
async function getCourses() {
  const response = await fetch(process.env.HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query Courses {
          courses {
            id
            title
            slug
            modules: moduleModels {
              isLocked
            }
          }
        }
        `,
    }),
  });
  const json = await response.json();

  return json.data.courses;
}

// Check if a course contains a module that is locked
function containsLockedModules(modules) {
  return modules.some((module) => module.isLocked);
}

export default async function Home() {
  const courses = await getCourses();
  return (
    <main className="prose w-full py-10 px-5 mx-auto">
      <h1 className="text-3xl font-bold">Our Courses</h1>
      {courses.map((course) => {
        return (
          <div key={course.id}>
            <h2 className="text-2xl font-bold">
              <Link href={`/courses/${course.slug}`}>{course.title}</Link>{" "}
              {course.isLocked} {containsLockedModules(course.modules) && "🔒"}
            </h2>
          </div>
        );
      })}
    </main>
  );
}
