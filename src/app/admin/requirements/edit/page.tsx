import AdminLayout from '@/components/Admin/AdminLayout';
import React from 'react';
const EditRequirementClient = React.lazy(() => import('./EditRequirementClient'));

export default function Page() {
  return (
    <AdminLayout title="Edit Requirement" subtitle="Update vacancy details">
      
     <EditRequirementClient />
    </AdminLayout>
  );
}
