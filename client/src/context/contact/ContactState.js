import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {   
                id: '1',
                name: "John Doe",
                email: "john@email.com",
                phone: '111-222-3333',
                type: 'Professional'
            },
            {   
                id: '2',
                name: "Jane Doe",
                email: "jane@email.com",
                phone: '111-222-3333',
                type: 'Professional'
            },
            {   
                id: '3',
                name: "Django Doe",
                email: "django@email.com",
                phone: '111-222-3333',
                type: 'Professional'
            },
        ],
        current: null
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add Contact
    const addContact = contact => {
        contact.id = uuid.v4();
        dispatch({ type: ADD_CONTACT, payload: contact });
    }

    // Delete Contact
    const deleteContact = id => {
        console.log(id);
        dispatch({ type: DELETE_CONTACT, payload: id });
    }

    // Set Current Contact
    const setCurrent = contact => {
        dispatch({ type: SET_CURRENT, payload: contact });
    }

    // Clear Current Contact
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT });
    }

    // Update Contact

    // Filter Contacts

    // Clear Filter

    return (
        <ContactContext.Provider
        value={{
            contacts: state.contacts,
            current: state.current,
            addContact,
            deleteContact,
            setCurrent,
            clearCurrent
        }}> 

            { props.children}
        </ContactContext.Provider>
    ) 
}

export default ContactState;