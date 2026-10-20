"use client";

import { useState } from "react";
import { CentralHub, DestinationId } from "@/components/hub/CentralHub";
import { SocialDots } from "@/components/hub/SocialDots";
import { AboutView } from "@/components/views/AboutView";
import { ProjectsView } from "@/components/views/ProjectsView";
import { InternshipsView } from "@/components/views/InternshipsView";
import { OpenSourceView } from "@/components/views/OpenSourceView";
import { HackathonsView } from "@/components/views/HackathonsView";
import { NetworkingView } from "@/components/views/NetworkingView";

export default function Home() {
  const [active, setActive] = useState<DestinationId | null>(null);

  const select = (id: DestinationId) => {
    setActive(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const back = () => {
    setActive(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-dvh relative">

      {/* Main content — full viewport */}
      <main className="w-full">
        {active === null && <CentralHub onSelectDestination={select} activeDestination={null} />}
        {active === "about" && <AboutView onBack={back} />}
        {active === "projects" && <ProjectsView onBack={back} />}
        {active === "internships" && <InternshipsView onBack={back} />}
        {active === "opensource" && <OpenSourceView onBack={back} />}
        {active === "hackathons" && <HackathonsView onBack={back} />}
        {active === "networking" && <NetworkingView onBack={back} />}
      </main>

      {/* Floating resume button & social dots — ONLY on main home central hub */}
      {active === null && <SocialDots />}

    </div>
  );
}
