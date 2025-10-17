export async function adminFetch(input: RequestInfo, init?: RequestInit) {
  // Attach token from localStorage or sessionStorage if present, and default to include credentials
  let token: string | null = null;
  if (typeof window !== 'undefined') {
    try {
      token = localStorage.getItem('token') || sessionStorage.getItem('token');
    } catch (e) {
      token = null;
    }
  }
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
        try { localStorage.removeItem('token'); } catch {}
        try { localStorage.removeItem('isLoggedIn'); } catch {}
        try { localStorage.removeItem('user'); } catch {}
        try { sessionStorage.removeItem('token'); } catch {}
        try { sessionStorage.removeItem('isLoggedIn'); } catch {}
        try { sessionStorage.removeItem('user'); } catch {}
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
