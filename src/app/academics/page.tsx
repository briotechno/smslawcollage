import Faculty from "./Faculty";
import Internship from "./Internship";
import LegalEducation from "./LegalEducation";
import Mentors from "./Mentors";
import SpecialLectures from "./SpecialLectures";
import Syllabus from "./Syllabus";

export default function AcademicsPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <LegalEducation />
      <Syllabus />
      <Internship />
      <Mentors />
      <SpecialLectures />
      <Faculty />
    </div>
  );
}
