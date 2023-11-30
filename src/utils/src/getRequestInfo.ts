import type { NextRequest } from 'next/server';
import type { Request } from 'request-ip';
import requestIp from 'request-ip';

export function getRequestIP(request: NextRequest): string | null {
  const _request: Request = { headers: {} };
  request.headers.forEach((v, k) => {
    _request.headers[k] = v;
  });
  return requestIp.getClientIp(_request);
}

export function getRequestLang(request: NextRequest): string | undefined {
  const headerLang = request.headers
    .get('accept-language')
    ?.split('-')[0]
    ?.split('-')[0];
  return headerLang;
}
