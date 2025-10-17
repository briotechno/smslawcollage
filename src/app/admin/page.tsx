"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
const AdminPage = () => {
  const router = useRouter();
  const pathname = usePathname();

useEffect(() => {
  if (pathname === "/admin") {
      router.push("/admin/login");
    }
  }, [pathname]);


  return (
  null
  );
};

export default AdminPage;
