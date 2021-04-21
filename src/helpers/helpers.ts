
/**
 * Get the user logged from the local storage
 */
 export function getUserLogged() {
  return JSON.parse(localStorage.getItem('userLogged') || 'null');
}

/**
 * Remove the user logged from the local storage
 */
export function removeUserLogged() {
  localStorage.removeItem('userLogged');
}

/**
 * Set the user logged on the local storage
 */
export function setUserLogged(userLogged: object) {
  if (process.env.NODE_ENV === 'development') {
    // console.tron.log('userLogged ^');
    // console.tron.log(userLogged);
  }
  localStorage.setItem('userLogged', JSON.stringify(userLogged));
}

/**
 * Get some value from the local storage
 */
export function getLocalStorage(key: string, defaultValue: any) {
  if (typeof defaultValue === 'string') {
    return localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key) || '')
      : defaultValue;
  }
  if (typeof defaultValue === 'number') {
    return localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key) || '0')
      : defaultValue;
  }
  return JSON.parse(localStorage.getItem(key) || JSON.stringify(defaultValue));
}

/**
 * Remove some value from the local storage
 */
export function removeLocalStorage(key: string) {
  localStorage.removeItem(key);
}

/**
 * Set some value on the local storage
 */
export function setLocalStorage(key: string, value: any) {
  if (typeof value === 'number') {
    localStorage.setItem(key, `${value}`);
  } else {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

/**
 * Check if str is not empty
 */
export function notEmpty(str: string | undefined) {
  return typeof str !== 'undefined' && str !== null && str !== '';
}

/**
 * Check if str is not empty
 */
export function isEmpty(str: string | undefined) {
  return typeof str === 'undefined' || str === null || str === '';
}

/**
 * Checks if a string is empty (including containing several empty spaces)
 * @param str string to check
 * @returns boolean
 */
export function isEmptyWithTrim(str: string) {
  return isEmpty(str.trim());
}

/*
 * Return a value from .env file if key given exists. Default value otherwise
 */
export const getEnvVar = (envKey: string, defaultValue: string): string => {
  return isEmpty(process.env[envKey])
    ? (defaultValue as string)
    : (process.env[envKey] as string);
};