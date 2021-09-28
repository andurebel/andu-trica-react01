import { findContact } from './query.js';
import { render as renderMessage } from './message.js';

import { render as renderContact } from './contact.js';
import { addMessage, clearMessages } from './notification-bar.js';

const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);
  const searchString = formData.get('q');

  if (searchString.trim().length < 1) {
    return;
  }

  clearMessages();
  // refactor:
  const contacts = findContact(searchString);
  const contactsCount = contacts.length;

  contacts.forEach((contact) => {
    console.log(contact);
    const stageElement = document.querySelector('.stage');

    stageElement.append();
  });

  if (!contactsCount) {
    const contactNotificationElement = render('No contacts found', 'warning');
    addMessage(contactNotificationElement);
  }
});

export default searchForm;
