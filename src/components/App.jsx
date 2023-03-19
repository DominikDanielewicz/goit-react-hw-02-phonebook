import React, { Component } from 'react';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
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
  };

  addClient = (name, number) => {
    let contactId = nanoid();
    const names = this.state.contacts.map(contact => contact.name);

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

  handleFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    const { filter, contacts } = this.state;

    const list = contacts.filter(
      contact =>
        this.state.filter === '' || contact.name.includes(this.state.filter)
    );

    return (
      <div>
        <h1>PhoneBook</h1>
        <ContactForm add={this.addClient} />
        <h2>Contacts</h2>
        <Filter change={this.handleFilter} value={filter} />
        <ContactList list={list} />
      </div>
    );
  }
}

export default App;
