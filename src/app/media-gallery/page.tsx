import PageBanner from "@/components/PageBanner";

export default function MediaGalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <PageBanner title="Media Gallery" subtitle="This is the Media Gallery section." />
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-6">
        <h2 className="text-3xl font-bold">Media Gallery</h2>
        <p className="text-gray-700 leading-relaxed">
          Placeholder content for the Media Gallery page. Replace this text with your actual content later.
        </p>
      </section>
    </div>
  );
}
