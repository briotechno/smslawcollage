export async function adminFetch(input: RequestInfo, init?: RequestInit) {
  // Attach token from localStorage if present, and default to include credentials
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  const headers = new Headers(init && init.headers ? init.headers as HeadersInit : undefined);
  if (token) headers.set('Authorization', `Bearer ${token}`);

  const finalInit: RequestInit = {
    credentials: 'include',
    ...init,
    headers,
  };

  const res = await fetch(input, finalInit);

  // Try to parse JSON safely
  let data: any = null;
  try {
    data = await res.clone().json();
  } catch (e) {
    data = null;
  }

  // If server indicates unauthorized standard JSON or HTTP 401, redirect to login
  const unauthorized = res.status === 401 || (data && data.success === false && /unauthor/i.test(String(data.message || '')));
  if (unauthorized) {
    try {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        localStorage.removeItem('isLoggedIn');
        // redirect to admin login
        window.location.href = '/admin/login';
      }
    } catch (e) {
      // ignore
    }
  }

  return res;
}

export default adminFetch;
