import { IncomingHttpHeaders } from 'http';
import { UserStoredInfo } from '@mono/types';
import { CONFIG } from '@mono/config';

// get userinfo from cookies
export function getUserInfo(
  cookies: IncomingHttpHeaders['cookie']
): UserStoredInfo | null {
  // guard against headers not being set
  if (!cookies) {
    return null;
  }
  // get CONFIG.storage.cookies.keys.userInfo cookie
  const userInfoCookie = cookies
    .split(';')
    .find((c) =>
      c.trim().startsWith(`${CONFIG.storage.cookies.keys.userInfo}=`)
    );

  // guard against cookie not being set
  if (!userInfoCookie) {
    return null;
  }

  // convert cookie to object
  /*
   userInfoCookie = user-info=%7B%22countryCode%22%3A%22EG%22%2C%22cityName%22%3A%22Cairo%22%2C%22languageCode%22%3A%22ar%22%2C%22languageName%22%3A%22Arabic%22%2C%22phoneCode%22%3A%2220%22%2C%22currencyCode%22%3A%22EGP%22%7D

  */
  // extract the value from the userInfoCookie string
  const object = userInfoCookie.split('=')[1];
  // decode the value
  const decoded = decodeURIComponent(object);
  // parse the value into an object
  const userInfo = JSON.parse(decoded) as UserStoredInfo;

  return userInfo;
}
