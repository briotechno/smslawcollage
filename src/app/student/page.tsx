import PageBanner from "@/components/PageBanner";

export default function StudentPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <PageBanner title="Student" subtitle="This is the Student section." />
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-6">
        <h2 className="text-3xl font-bold">Student</h2>
        <p className="text-gray-700 leading-relaxed">
          Placeholder content for the Student page. Replace this text with your actual content later.
        </p>
      </section>
    </div>
  );
}
