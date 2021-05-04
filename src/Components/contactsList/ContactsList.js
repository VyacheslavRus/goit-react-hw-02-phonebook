import React from 'react'
import { ContactsListStyled } from './ContactsListStyled';


const ContactsList = ({ contacts, deleteContact }) => {
    return (
        <div>
            <ul>
                {contacts.map(contact => (
                    <ContactsListStyled key={contact.id}>
                        <p>{contact.name}:</p>
                        <p>{contact.number}</p>
                        <button className='btn' type="button" onClick={deleteContact} id={contact.id}>Delete</button>
                    </ContactsListStyled>
                ))}
            </ul>
        </div>
    );
}

export default ContactsList;