import { contacts } from './data.js';

export const findContact = (needle = 'query') => {
  return contacts.filter((contact) => {
    const values = Object.values(contact);

    const haystack = values.reduce((string, value) => {
      if (typeof value === 'string') {
        string += value.toLowerCase();
      }

      return string;
    }, '');

    if (haystack.includes(needle)) {
      return true;
    }

    return false;
  });
};
