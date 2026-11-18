import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { projects } from "@/content/projects";
import { ProjectVisual } from "@/components/site/ProjectVisual";
import { CustomCursor } from "@/components/site/CustomCursor";

export const Route = createFileRoute("/work/$projectId")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.id === params.projectId);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Case study unavailable" }, { name: "robots", content: "noindex" }] };
    }
    const { project } = loaderData;
    const title = `${project.title} — Case Study | Aniket Arvind Pandit`;
    return {
      meta: [
        { title },
        { name: "description", content: project.subtitle },
        { property: "og:title", content: title },
        { property: "og:description", content: project.subtitle },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: CaseStudy,
});

function Block({ label, body }: { label: string; body: string }) {
  return (
    <motion.div
      className="grid gap-4 border-t border-border py-10 md:grid-cols-[200px_1fr] md:gap-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7 }}
    >
      <p className="label-mono">{label}</p>
      <p className="max-w-2xl text-base leading-relaxed text-foreground/85 md:text-lg">{body}</p>
    </motion.div>
  );
}

function CaseStudy() {
  const { project } = Route.useLoaderData();
  const i = projects.findIndex((p) => p.id === project.id);
  const next = projects[(i + 1) % projects.length]!;

  return (
    <main className="min-h-screen bg-background">
      <CustomCursor />
      <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-10 md:py-28">
        <Link to="/" data-cursor="text" className="label-mono hover:!text-foreground">
          ← Back to index
        </Link>
        <p className="label-mono mt-14">
          {project.index} — {project.category}
        </p>
        <h1 className="display-xl mt-4">{project.title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{project.subtitle}</p>

        <div className="mt-14">
          <ProjectVisual variant={project.visual} />
        </div>

        <div className="mt-16">
          <Block label="Problem" body={project.problem} />
          <Block label="Thinking" body={project.thinking} />
          <Block label="Build" body={project.build} />
          <Block label="Experience" body={project.experience} />
          <Block label="Result" body={project.result} />
          <Block label="Learning" body={project.learning} />
          <div className="grid gap-4 border-t border-border py-10 md:grid-cols-[200px_1fr] md:gap-16">
            <p className="label-mono">Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="label-mono border border-border px-3 py-1.5">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <Link
          to="/work/$projectId"
          params={{ projectId: next.id }}
          data-cursor="view"
          className="mt-16 block border-t border-border pt-10"
        >
          <p className="label-mono">Next project</p>
          <p className="display-lg mt-3 transition-colors hover:text-primary">{next.title} →</p>
        </Link>
      </div>
    </main>
  );
}