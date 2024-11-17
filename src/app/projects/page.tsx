import ProjectLink from "@/components/ProjectLink";
import { db } from "@/server/db";
import { projectTable } from "@/server/db/schema/schema";

const Page = async () => {
  const projects = await db.select().from(projectTable).limit(10);
  return (
    <main className="flex h-full flex-col overflow-hidden pt-10">
      {projects.map((project) => (
        <ProjectLink key={project.id} project={project} />
      ))}
    </main>
  );
};

export default Page;
