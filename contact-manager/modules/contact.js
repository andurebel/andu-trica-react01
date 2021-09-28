export const render = (contact) => {
  const contactContainer = document.createElement('article');
  contactContainer.classList.add('contact', 'border', 'p-3');

  const heading = document.createElement('h1');
  heading.textContent = `
    ${contact.name} ${contact.surname}
  `;

  const information = document.createElement('ul');
  const phone = document.createElement('li');
  const email = document.createElement('li');

  phone.textContent = contact.phone;
  email.textContent = contact.email;
  imformation.append(phone);
  information.append(email);

  contactContainer.append(heading);
  contactContainer.append(information);

  return contactContainer;
};
