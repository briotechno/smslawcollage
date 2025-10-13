import EnvironmentalLawClinicPage from "./Environmental-Law-Clinic/page";
import GenderLAWCLINICpage from "./Gender-LAW-CLINIC/page";
import IntellectualPropertyLawClinicpage from "./Intellectual-Property-Law-Clinic/page";
import LegalAidClinicpage from "./Legal-Aid-Clinic/page";

export default function ResearchClinicPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <EnvironmentalLawClinicPage />
      <GenderLAWCLINICpage />
      <IntellectualPropertyLawClinicpage />
      <LegalAidClinicpage />
    </div>
  );
}
