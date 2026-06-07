import { useForm} from "@formspree/react";
import profileImage from "../assets/profile-image.webp";
import officeImage from "../assets/office.webp";
import { projects } from "../data/projects";
import { useState } from "react";
import type { Project } from "../types/projects";
import ProjectCard from "../components/projects/ProjectCard";

const allTags = ["All", "HTML", "CSS", "JavaScript", "Next.js", "TypeScript", "Tailwind", "React"];

export default function Home() {
  const [activeTag, setActiveTag] = useState("All");
  const [state, handleSubmit] = useForm("mredrwna");

  const filteredProjects = activeTag === "All"
    ? projects
    : projects.filter((p: Project) => p.tags.includes(activeTag));

  return (
    <div className="min-h-screen bg-bg">

      <section className="max-w-6xl mx-auto px-8 py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center md:text-left">
            <p className="text-text-muted text-sm mb-2">Hi, I am</p>
            <h1 className="text-accent text-2xl font-semibold mb-2">Tonje Schjefstad</h1>
            <h2 className="text-text-primary text-4xl md:text-6xl font-bold leading-tight mb-6">
            <span className="block">Frontend</span>
            <span className="block md:pl-32">Developer</span>
          </h2>
            <p className="text-text-muted max-w-lg mx-auto md:mx-0 leading-relaxed">
                I'm passionate about clean, modern design and continuous learning. 
                Currently building my skills through hands on projects while focusing 
                on user experience and writing maintainable code.
            </p>
            <div className="flex gap-4 mt-8 justify-center md:justify-start">
            <a
              href="#contact"
              className="bg-accent text-bg font-medium px-6 py-3 rounded hover:opacity-80 transition-opacity duration-200"
            >
              Contact me
            </a>
            <a
              href="https://github.com/TonjeSchjefstad"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-accent text-text-muted px-6 py-3 rounded hover:text-text-primary hover:border-accent transition-colors duration-200"
            >
              GitHub
            </a>
          </div>
        </div>
        
        <div className="shrink-0 flex justify-center">
            <img
                src={profileImage}
                alt="Tonje Schjefstad"
                className="w-48 h-48 md:w-72 md:h-72 rounded-full object-cover border-4 border-accent"
            />
            </div>
      </section>



      <section id="about" className="bg-surface py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            <div className="shrink-0 flex justify-center">
              <img
                src={officeImage}
                alt="My home office"
                className="w-48 h-48 md:w-72 md:h-72 rounded-full object-cover object-center border-4 border-accent"
              />
            </div>

            <div>
              <h2 className="text-text-primary text-4xl font-bold mb-6">About Me</h2>
              <p className="text-text-muted max-w-2xl leading-relaxed mb-4">
                I'm Tonje, a 34 year old Frontend Developer student based in Steinkjer, Norway. 
                After 12 years in retail leadership at IKEA, including 9 years in management, 
                I made the leap into tech to follow an interest I've had since high school. 
                Outside of coding, you'll find me knitting, cheering on my favourite F1 drivers, 
                or spending time with my two Siberian cats.
              </p>
              <p className="text-text-muted max-w-2xl leading-relaxed mb-10">
                I'm currently finishing my second year of Frontend Development studies at Noroff, 
                where I've built everything from e-commerce platforms to social media apps and 
                auction houses. I care deeply about clean, accessible design and writing code 
                that's easy to read and maintain. I'm now looking for my first junior role, 
                somewhere I can keep growing and contribute from day one.
              </p>
              <div className="flex flex-wrap gap-6">
                <i className="devicon-html5-plain colored text-5xl" title="HTML5" />
                <i className="devicon-css3-plain colored text-5xl" title="CSS3" />
                <i className="devicon-javascript-plain colored text-5xl" title="JavaScript" />
                <i className="devicon-typescript-plain colored text-5xl" title="TypeScript" />
                <i className="devicon-react-original colored text-5xl" title="React" />
                <i className="devicon-figma-plain colored text-5xl" title="Figma" />
                <i className="devicon-github-original text-5xl text-text-primary" title="GitHub" />
                <i className="devicon-vscode-plain colored text-5xl" title="VS Code" />
                <i className="devicon-git-plain colored text-5xl" title="Git" />
                <i className="devicon-tailwindcss-plain colored text-5xl" title="Tailwind" />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-text-primary text-4xl font-bold text-center mb-4">My Projects</h2>
          <p className="text-text-muted text-center max-w-xl mx-auto mb-10">
            This is a selection of projects I've built during my studies at Noroff.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-full text-sm transition-colors duration-200 ${
                  activeTag === tag
                    ? "bg-accent text-bg font-medium"
                    : "border border-border text-text-muted hover:text-text-primary"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project: Project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-surface py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-text-primary text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-text-muted max-w-xl mb-12">
            I'm currently looking for my first junior frontend role. Whether you have 
            a question, an opportunity, or just want to say hi, feel free to reach out!
          </p>

          <div className="flex flex-col md:flex-row gap-12">
            <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="bg-bg border border-border text-text-primary placeholder:text-text-muted px-4 py-3 rounded outline-none focus:border-accent transition-colors duration-200"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="bg-bg border border-border text-text-primary placeholder:text-text-muted px-4 py-3 rounded outline-none focus:border-accent transition-colors duration-200"
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows={5}
              required
              className="bg-bg border border-border text-text-primary placeholder:text-text-muted px-4 py-3 rounded outline-none focus:border-accent transition-colors duration-200 resize-none"
            />
            {state.succeeded ? (
              <p className="text-accent font-medium">Thanks for reaching out! I'll get back to you soon.</p>
            ) : (
              <button
                type="submit"
                disabled={state.submitting}
                className="bg-accent text-bg font-medium px-6 py-3 rounded hover:opacity-80 transition-opacity duration-200 self-start disabled:opacity-50"
              >
                {state.submitting ? "Sending..." : "Send message"}
              </button>
            )}
          </form>
          </div>
        </div>
      </section>
    </div>
  );
}