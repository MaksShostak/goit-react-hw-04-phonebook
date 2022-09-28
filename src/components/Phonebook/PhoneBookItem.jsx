import PropTypes from 'prop-types';
import { ButtonAdd } from './FormForPhonebook/FormForPhoneBook.styled';

export const PhoneBookItem = ({ name, number, OnClick }) => {
  return (
    <>
      <p>
        {name}: {number}
      </p>
      <ButtonAdd type="submit" onClick={OnClick}>
        Delete
      </ButtonAdd>
    </>
  );
};

PhoneBookItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  OnClick: PropTypes.func.isRequired,
};
