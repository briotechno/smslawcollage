import AboutClg from "./AboutClg";
import HeroSection from "./HeroSection";
import KnowledgeResource from "./Knowledge";
import PrincipalNotice from "./PrincipalNotice";
import Resource from "./Resource";
import VisionMission from "./VisionMission";

export default function AboutUsPage() {
  return (
    <div className="">
      <HeroSection />
      <PrincipalNotice />
      <AboutClg />
      <VisionMission />
      <KnowledgeResource />
      <Resource />
    </div>
  );
}
