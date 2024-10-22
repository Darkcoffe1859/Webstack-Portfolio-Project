// src/utils/cookieUtils.js

export const setCookie = (name, value, days) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString(); // Set expiration
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`; // Set cookie
};

export const getCookie = (name) => {
    return document.cookie.split('; ').reduce((prev, current) => {
        const [key, value] = current.split('=');
        return key === name ? decodeURIComponent(value) : prev;
    }, null);
};

export const deleteCookie = (name) => {
    setCookie(name, '', -1); // Set expiration to a past date
};

