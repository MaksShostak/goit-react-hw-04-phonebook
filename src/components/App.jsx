import { useState, useEffect } from 'react';
import { PhonebookList } from './Phonebook/PhoneBookList';
import { FormForPhoneBook } from './Phonebook/FormForPhonebook/FormForPhoneBook';
import { nanoid } from 'nanoid';
import { FilterForPhoneBook } from './Phonebook/FilterForPhonbook/FilterForPhoneBook';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const KeyForLocalStorage = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem(KeyForLocalStorage)) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(KeyForLocalStorage, JSON.stringify(contacts));
  }, [contacts]);

  const forSubmitHandler = data => {
    const { name, number } = data;
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return Notify.warning(`${name} is already in contacts`, {
        backOverlay: true,
        timeout: 2000,
        position: 'center-top',
        fontSize: '34px',
        width: '600px',
        clickToClose: true,
      });
    }

    const contact = {
      id: nanoid(),
      name: name.toUpperCase(),
      number,
    };

    setContacts(prevContacts => [contact, ...prevContacts]);
  };

  const changeFilter = event => {
    const { value } = event.currentTarget;
    console.log(value);
    setFilter(value);
  };

  const handleDeleteContact = idContact => {
    let filtered = null;
    setContacts(
      prevContacts =>
        (filtered = prevContacts.filter(contact => contact.id !== idContact))
    );
    setFilter(prevFilter =>
      getFilteredContact(filtered).length ? prevFilter : ''
    );
  };

  const getFilteredContact = filtered => {
    const normalaizedFilter = filter.toLowerCase();

    const active = filtered ? filtered : contacts;

    return active.filter(contact => {
      return (
        contact.name.toLowerCase().includes(normalaizedFilter) ||
        contact.number.includes(filter)
      );
    });
  };

  const filteredContact = getFilteredContact();

  return (
    <div
      style={{
        backgroundColor: 'rgb(225, 179, 152)',
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
      <h1>Phonebook</h1>
      <FormForPhoneBook onSubmit={forSubmitHandler} data={contacts} />
      <h2>Contacts</h2>
      <FilterForPhoneBook
        filteredValue={filter}
        onChangefilter={changeFilter}
      />
      <PhonebookList
        contacts={filteredContact}
        onDelete={handleDeleteContact}
      />
    </div>
  );
};
