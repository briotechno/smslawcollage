"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, Check, Upload } from "lucide-react";
import AdminLayout from "@/components/Admin/AdminLayout";

interface LegalAidActivityForm {
  date: string;
  title: string;
  excerpt: string;
  image: string; // URL or base64
}

const mockFetchLegalAidActivity = async (id: string): Promise<LegalAidActivityForm | null> => {
  const activities = [
    {
      id: "la1",
      date: "03 DEC, 2019",
      title: "Celebration of the International Day for Persons with Disabilities",
      excerpt: "The Legal Aid Clinic of GLS Law College conducted an awareness campaign in Blind People's Association, Ahmedabad on account of the International Day for Persons with Disabilities. The campaign majorly focused on the Rights and Benefits available to the Visually Impaired, taking into light \"The Protection of Persons with Disability Act, 2016\"",
      image: "/assets/Noimage.jpg",
    },
    {
      id: "la2",
      date: "17 JULy, 2019",
      title: "Lex Juris Scienticia Quiz competition",
      excerpt: "The Lex Juris Scienticia was enlightened with the gracious presence of Hon'ble Justice R.R. Tripathi, Former Judge of Gujarat High Court. The chief guest opened up with law aspirants with the role media plays in accordance with the Judiciary. One cannot categorize every case in the frame of pendency",
      image: "/assets/Noimage.jpg",
    },
    {
      id: "la3",
      date: "27 FEB, 2018",
      title: "Legal Clinic - Bakrol",
      excerpt: "The Student of legal aid Clinic of GLS Law College and In charge Faculty members with Two High court Advocate went to the Bakrol village for providing Free legal aid to People of Bakrol on 27th Feb. 2018 which has been adopted by Gujarat Law Society.",
      image: "/assets/Noimage.jpg",
    },
    {
      id: "la4",
      date: "22 MAR, 2018",
      title: "Legal Clinic – A Legal Initiative at Bakrol (Ahmedabad)",
      excerpt: "The Student of legal aid Clinic of GLS Law College and In charge Faculty members with Two High court Advocate went to the Bakrol village for providing Free legal aid to People of Bakrol on 31st January 2018 which has been adopted by Gujarat Law Society.",
      image: "/assets/Noimage.jpg",
    },
    {
      id: "la5",
      date: "02 SEP, 2017",
      title: "The Launch of ELC",
      excerpt: "Official launch of the Environmental Law Clinic with dignitaries and a flagship awareness drive.",
      image: "/assets/Noimage.jpg",
    },
  ];

  const activity = activities.find(a => a.id === id);
  if (activity) {
    return {
      date: activity.date,
      title: activity.title,
      excerpt: activity.excerpt,
      image: activity.image,
    };
  }
  return null;
};

const LegalAidEditPage = () => {
  const router = useRouter();
  const params = useSearchParams();
  const id = params.get("id");
  const [form, setForm] = useState<LegalAidActivityForm | null>(null);

  useEffect(() => {
    if (!id) return;
    (async () => {
      const data = await mockFetchLegalAidActivity(id);
      setForm(
        data ?? {
          date: "",
          title: "",
          excerpt: "",
          image: "/assets/Noimage.jpg",
        }
      );
    })();
  }, [id]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && form) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm({ ...form, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const submit = () => {
    if (!form) return;
    if (!form.title || !form.excerpt || !form.date) {
      alert("Please fill required fields (title, excerpt, date)");
      return;
    }
    console.log("Update legal aid activity:", { id, ...form });
    alert("Legal Aid Activity updated successfully!");
    router.push("/admin/legal-aid");
  };

  if (!id) {
    return (
      <AdminLayout title="Activity not found" subtitle="The requested legal aid activity could not be found">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Activity not found</h1>
          <button onClick={() => router.push("/admin/legal-aid")} className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors">Back to Legal Aid Activities</button>
        </div>
      </AdminLayout>
    );
  }

  if (!form) {
    return (
      <AdminLayout title="Edit Legal Aid Activity" subtitle="Update legal aid clinic activity">
        <div className="text-center py-12">
          <div className="text-gray-500">Loading...</div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout 
      title="Edit Legal Aid Activity" 
      subtitle="Update legal aid clinic activity"
    >
      <div className="flex items-center justify-between mb-6">
        <button onClick={() => router.push("/admin/legal-aid")} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
          <ArrowLeft className="w-5 h-5" /> Back to Legal Aid Activities
        </button>
        <div />
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
            <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Enter activity title" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date *</label>
            <input type="text" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="e.g., 03 DEC, 2019" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Activity Image</label>
            <div className="flex items-center gap-4">
              <div className="relative w-24 h-24 rounded-md overflow-hidden border border-gray-200 bg-gray-50">
                <img src={form.image} alt="Activity Preview" className="object-cover w-full h-full" />
              </div>
              <label className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md cursor-pointer hover:bg-purple-700 transition-colors">
                <Upload className="w-4 h-4" />
                Upload
                <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
              </label>
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt *</label>
            <textarea value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} rows={6} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Enter detailed description of the activity" />
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-gray-200">
          <button onClick={() => router.push("/admin/legal-aid")} className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">Cancel</button>
          <button onClick={submit} className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors flex items-center gap-2">
            <Check className="w-4 h-4" /> Update Activity
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default LegalAidEditPage;
