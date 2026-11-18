import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Intro } from "@/components/site/Intro";
import { CustomCursor } from "@/components/site/CustomCursor";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { SystemSection } from "@/components/site/SystemSection";
import { Work } from "@/components/site/Work";
import { Signature } from "@/components/site/Signature";
import { Experience } from "@/components/site/Experience";
import { Process } from "@/components/site/Process";
import { Skills } from "@/components/site/Skills";
import { About } from "@/components/site/About";
import { VisualWork } from "@/components/site/VisualWork";
import { Contact } from "@/components/site/Contact";

const TITLE = "Aniket Arvind Pandit — Data Analyst | Data Science | Creative Technologist";
const DESC =
  "Personal portfolio showcasing data analytics, machine learning, AI, software projects, dashboards, design and interactive digital experiences.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      <CustomCursor />
      {!introDone && <Intro onDone={() => setIntroDone(true)} />}
      <Nav />
      <main>
        <Hero />
        <SystemSection />
        <Work />
        <Signature />
        <Experience />
        <Process />
        <Skills />
        <About />
        <VisualWork />
        <Contact />
      </main>
    </>
  );
}
