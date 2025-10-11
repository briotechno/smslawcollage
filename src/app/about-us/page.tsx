import AboutClg from "./AboutClg";
import HeroSection from "./HeroSection";
import KnowledgeResource from "./Knowledge";
import Resource from "./Resource";
import VisionMission from "./VisionMission";

export default function AboutUsPage() {
  return (
    <div className="">
      <HeroSection />
      <AboutClg />
      <VisionMission />
      <KnowledgeResource />
      <Resource />
    </div>
  );
}
