import React from 'react';

const Filter = props => {
  return (
    <div>
      <h3>Find contacts by name:</h3>
      <input
        id="filter"
        value={props.filter}
        onChange={props.change}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </div>
  );
};

export default Filter;
