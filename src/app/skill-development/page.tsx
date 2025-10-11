import CourtExercises from "./CourtExercises";
import Debate from "./Debate";
import ElocutionPublicSpeaking from "./ElocutionPublicSpeaking";

export default function SkillDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Debate />
      <ElocutionPublicSpeaking />
      <CourtExercises />
    </div>
  );
}
