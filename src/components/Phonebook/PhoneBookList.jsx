import React from 'react';
import { PhoneBookItem } from './PhoneBookItem';
import PropTypes from 'prop-types';

export const PhonebookList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <PhoneBookItem
              OnClick={() => onDelete(id)}
              name={name}
              number={number}
            />
          </li>
        );
      })}
    </ul>
  );
};

PhonebookList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
