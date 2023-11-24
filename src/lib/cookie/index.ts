export function parseCookies(cookie: string): [string, string][] {
  try {
    return cookie.split(";").map((cookie) => {
      const [key, ...value] = cookie.split("=");
      return [key!.trim(), value.join("=")];
    });
  } catch(e) {
    console.warn('There was an error while trying to read the cookies.');
    return [];
  }
}

/**
 * Accesses `document.cookie` in a safe way.</br>
 * @returns string `document.cookie` if the `document` is defined, else an empty string.
 */
export function getCookies(): string {
  if (typeof document !== 'object') {
    console.warn('There was an error while trying to access the cookies. `document` is undefined. returning an empty string.');
    return ''
  }

  return document.cookie;
}