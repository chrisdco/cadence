/** Compatibility adapter only. All authorization and provider work lives in Convex. */
export async function forwardPremium(request: Request, path: string) {
  const origin = process.env.CONVEX_SITE_URL || process.env.EXPO_PUBLIC_CONVEX_SITE_URL;
  if (!origin) return Response.json({ code: 'provider_failure', error: 'Personal feedback is temporarily unavailable.' }, { status: 503 });
  if (!request.headers.get('Authorization')) return Response.json({ code: 'authentication_required', error: 'Sign in to use personal feedback.' }, { status: 401 });
  return fetch(`${origin.replace(/\/$/, '')}${path}`, { method: 'POST', headers: request.headers, body: await request.arrayBuffer(), signal: request.signal });
}
