import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === Number(id));
  const [copied, setCopied] = useState(false);


  if (!project) {
    return (
      <div className="min-h-screen bg-bg flex flex-col items-center justify-center gap-4">
        <p className="text-text-muted text-lg">Project not found.</p>
        <Link to="/" className="text-accent hover:underline">
          ← Back to home
        </Link>
      </div>
    );
  }


  function handleCopyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-4xl mx-auto px-8 py-16">

        <button
          onClick={() => navigate(-1)}
          className="text-text-muted text-sm hover:text-accent transition-colors duration-200 mb-8 inline-block"
        >
          ← Back
        </button>

        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
          <h1 className="text-text-primary text-4xl md:text-5xl font-bold">
            {project.title}
          </h1>
          <button
          onClick={handleCopyLink}
          className="text-text-muted text-sm border border-border px-4 py-2 rounded hover:text-text-primary hover:border-text-muted transition-colors duration-200 shrink-0"
        >
          {copied ? "Copied! ✓" : "Copy link 🔗"}
        </button>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs bg-border text-text-muted px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <figure className="mb-12">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full rounded-xl object-cover object-top max-h-125"
          />
          <figcaption className="text-text-muted text-sm text-center mt-3 italic">
            {project.imageCaption}
          </figcaption>
        </figure>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <h2 className="text-text-primary text-xl font-semibold mb-4">
              About the project
            </h2>
            <p className="text-text-muted leading-relaxed">
              {project.detailedDescription}
            </p>
          </div>

          <div className="flex flex-col gap-4 md:w-48 shrink-0">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-bg text-sm font-medium px-6 py-3 rounded text-center hover:opacity-80 transition-opacity duration-200"
            >
              Live Demo
            </a>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border text-text-muted text-sm px-6 py-3 rounded text-center hover:text-text-primary hover:border-text-muted transition-colors duration-200"
            >
              GitHub
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}