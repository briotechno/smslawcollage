import PageBanner from "@/components/PageBanner";

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <PageBanner title="Achievements" subtitle="This is the Achievements section." />
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-6">
        <h2 className="text-3xl font-bold">Achievements</h2>
        <p className="text-gray-700 leading-relaxed">
          Placeholder content for the Achievements page. Replace this text with your actual content later.
        </p>
      </section>
    </div>
  );
}
