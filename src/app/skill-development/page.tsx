import CourtExercises from "./CourtExercises/page";
import Debate from "./Debate/page";
import ElocutionPublicSpeaking from "./ElocutionPublicSpeaking/page";

export default function SkillDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Debate />
      <ElocutionPublicSpeaking />
      <CourtExercises />
    </div>
  );
}
