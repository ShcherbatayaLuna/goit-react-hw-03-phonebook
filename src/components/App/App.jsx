import React, { Component } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { Container, TitlePrimary, TitleSecondary } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHandler = data => {
    this.state.contacts.some(
      ({ name }) => name.toLowerCase().trim() === data.name.toLowerCase().trim()
    )
      ? alert('This contact is already in list')
      : this.setState({
          contacts: [...this.state.contacts, data],
        });
  };

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  filterContact = () => {
    const normalizedString = this.state.filter.toLowerCase().trim();

    const filterContactList = this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedString)
    );

    return filterContactList;
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <Container>
        <TitlePrimary>Phonebook</TitlePrimary>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <TitleSecondary>Contacts</TitleSecondary>
        <Filter filter={this.state.filter} onChange={this.onChange} />
        <ContactList
          contacts={this.filterContact()}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
