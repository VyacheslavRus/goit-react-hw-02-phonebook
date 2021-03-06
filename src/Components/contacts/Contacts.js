import React, { Component } from 'react'
import { v4 as uuid } from 'uuid';
import ContactsForm from '../contactsForm/ContactsForm';
import ContactsList from '../contactsList/ContactsList';
import Filter from '../filter/Filter';
import Section from '../section/Section';


class Contacts extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
        name: '',
        number: ''
    }

    addContact = contact => {
        this.setState(prevState => {
            return {
                contacts: [...prevState.contacts, { ...contact, id: uuid() }]
            };
        });
    };

    deleteContact = (e) => {
        const { id } = e.target
        this.setState({
            contacts: this.state.contacts.filter(contact => contact.id !== id)
        })
    }

    onCheckDuplicateName = (name) => {
        const isDuplicate = this.state.contacts.some((contact) => contact.name === name)
        if (isDuplicate) {
            alert(`${name} is already in contacts.`);
            return;
        }
    }

    setFilter = (e) => {
        const { value } = e.target;
        this.setState({
            filter: value
        })
    }

    getFilteredContacts = () => {
        return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
    };

    render() {
        return (
            <>
                <Section title="Phonebook">
                    <ContactsForm addContact={this.addContact} onCheckDuplicateName={this.onCheckDuplicateName} />
                </Section>

                <Section title="Contacts" styles="filterContainerStyle">
                    <Filter filter={this.state.filter} setFilter={this.setFilter} />
                </Section>

                <Section>
                    <ContactsList contacts={this.getFilteredContacts()} deleteContact={this.deleteContact} />
                </Section>
            </>
        );
    }
}

export default Contacts;


