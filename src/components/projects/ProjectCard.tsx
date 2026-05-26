import { Link } from "react-router-dom";
import type { Project } from "../../types/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="bg-surface border border-border rounded-xl overflow-hidden hover:border-accent transition-colors duration-200 flex flex-col"
    >
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-48 object-cover object-top"
      />
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-text-primary font-semibold text-lg mb-2">
          {project.title}
        </h3>
        <p className="text-text-muted text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-border text-text-muted px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="text-accent text-sm mt-auto">
          Read more →
        </span>
      </div>
    </Link>
  );
}