import React from 'react';

const ContactListElement = props => {
  return (
    <li>
      {props.name}: {props.number}
    </li>
  );
};

export default ContactListElement;
