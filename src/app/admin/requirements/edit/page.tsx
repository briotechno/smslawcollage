import React, { Suspense } from 'react';
import AdminLayout from '@/components/Admin/AdminLayout';
const EditRequirementClient = React.lazy(() => import('./EditRequirementClient'));

export default function Page() {
  return (
    <AdminLayout title="Edit Requirement" subtitle="Update vacancy details">
      <div className="flex items-center justify-between mb-6">
        {/* Back button rendered inside client component - keep page markup minimal */}
      </div>
     <EditRequirementClient />
    </AdminLayout>
  );
}
