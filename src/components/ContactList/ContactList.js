import ContactListElement from 'components/ContactListElement/ContactListElement';
import React from 'react';

const ContactList = props => {
  return (
    <ul>
      {props.list.map(contact => (
        <ContactListElement
          key={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
};

export default ContactList;
