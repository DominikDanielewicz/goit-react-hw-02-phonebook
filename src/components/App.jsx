import propTypes from 'prop-types';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    let contactId = nanoid();

    const { name, number, contacts } = this.state;

    const names = contacts.map(contact => contact.name);

    if (!names.includes(name)) {
      this.setState({
        contacts: [
          { id: contactId, name: name, number: number },
          ...this.state.contacts,
        ],
      });
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    const { filter, name, number, contacts } = this.state;

    const list = contacts
      .filter(
        contact =>
          this.state.filter === '' || contact.name.includes(this.state.filter)
      )
      .map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
        </li>
      ));

    return (
      <div>
        <h1>PhoneBook</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            value={name}
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label htmlFor="number">Number</label>
          <input
            id="number"
            value={number}
            onChange={this.handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Add Contact</button>
        </form>
        <div>
          <h2>Contacts</h2>
          <h3>Find contacts by name:</h3>
          <input
            id="filter"
            value={filter}
            onChange={this.handleFilter}
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ul>{list}</ul>
        </div>
      </div>
    );
  }
}

App.propTypes = {};

export default App;
