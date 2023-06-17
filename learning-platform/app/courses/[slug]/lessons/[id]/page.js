import Navigation from "@/components/Navigation";
import { RichText } from "@graphcms/rich-text-react-renderer";

async function getLesson(id) {
  const response = await fetch(
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cliyrw74e08e101uc4p1d448h/master",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
            query Lesson($id: ID!) {
                lesson(where: {id: $id}) {
                    id
                    title
                    body {
                        json                                                
                    }
                    moduleModel {
                        isLocked
                    }
                    description
                    title
                    videoUrl
                    navDetails: moduleModel {
                        title
                        course {
                            title
                            slug
                            modules: moduleModels {
                                id
                                isLocked
                                title
                                lessons {
                                  id
                                  title
                                }
                              }
                        }
                        lessons {
                            id
                            title
                        }
                    }
                }
            }
            `,
        variables: {
          id,
        },
      }),
    }
  );
  const json = await response.json();

  return json.data.lesson;
}

export default async function Lesson({ params }) {
  const {
    id,
    navDetails,
    title,
    body,
    moduleModel,
    loggedIn = true,
  } = await getLesson(params.id);
  return (
    <div className="grid-cols-[minmax(200px,250px)_minmax(40ch,_1fr)] grid gap-4">
      <Navigation
        lessonId={id}
        title={navDetails.course.title}
        slug={navDetails.course.slug}
        modules={navDetails.course.modules}
        lessons={navDetails.lessons}
      />
      <main className="prose w-full py-10 px-5 mx-auto">
        <h1 className="text-3xl font-bold">{title}</h1>
        <RichText content={body?.json} />
      </main>
    </div>
  );
}
