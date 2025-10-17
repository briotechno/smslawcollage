import AdminLayout from '@/components/Admin/AdminLayout';
import React from 'react';
const EditCalendarClient = React.lazy(() => import('./EditClientPage'));

export default function Page() {
  return (
    <AdminLayout title="Edit Calendar Event" subtitle="Update calendar event details">
      <EditCalendarClient />
    </AdminLayout>
  );
}
