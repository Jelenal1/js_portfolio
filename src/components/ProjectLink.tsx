import { ProjectTable } from "@/utils/types";

const ProjectLink = ({ project }: { project: ProjectTable }) => {
  return (
    <a href={`/projects/${project.alias}`}>
      <div className="flex w-full gap-2 rounded-md border p-3">
        <div className="flex aspect-square w-20 items-center justify-center rounded-full bg-white bg-opacity-60 text-3xl text-black">
          {project.title.split(" ")[0].charAt(0) +
            project.title.split(" ")[1].charAt(0)}
        </div>
        <div>
          <div className="mx-auto text-2xl">{project.title}</div>
          <a
            href={project.url}
            className="hover:cursor-pointer hover:underline"
          >
            {project.url}
          </a>
          <div>{project.createdAt.toLocaleDateString()}</div>
        </div>
      </div>
    </a>
  );
};

export default ProjectLink;
