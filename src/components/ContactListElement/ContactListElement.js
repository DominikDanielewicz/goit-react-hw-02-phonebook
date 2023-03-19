import React from 'react';

const ContactListElement = props => {
  return (
    <li>
      {props.name}: {props.number}
      <button type="button" onClick={props.deleteContact}>
        Delete
      </button>
    </li>
  );
};

export default ContactListElement;
