import React, { Component } from 'react'
import { ContactsFormStyled } from './ContactsFormStyled'


class ContactsForm extends Component {
    state = {
        contacts: [],
        filter: '',
        name: '',
        number: ''
    }

    onHandleSubmit = e => {
        e.preventDefault();
        this.props.addContact(this.state);
        this.props.onCheckDuplicateName(this.state.name);
        this.setState({
            contacts: [],
            name: "",
            filter: '',
            number: ""
        });
    };

    onHandleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });

    };

    render() {
        return (
            <ContactsFormStyled onSubmit={this.onHandleSubmit}>
                <label>
                    Name
          <input
                        placeholder="name"
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        onChange={this.onHandleChange}
                        value={this.state.name}
                    />
                </label>
                <label>
                    Number
          <input
                        placeholder="number"
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                        onChange={this.onHandleChange}
                        value={this.state.number}
                    />
                </label>
                <button type="submit">Add Contact</button>
            </ContactsFormStyled>
        );
    }
}

export default ContactsForm;