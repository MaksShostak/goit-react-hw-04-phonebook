import React from 'react';
import PropTypes from 'prop-types';
import { FilterLabelStyled, StyledInput } from './FilterForPhoneBook.styled';

export const FilterForPhoneBook = ({ filteredValue, onChangefilter }) => {
  return (
    <FilterLabelStyled>
      Find contacts by name
      <StyledInput
        type="text"
        value={filteredValue}
        onChange={onChangefilter}
      />
    </FilterLabelStyled>
  );
};

FilterForPhoneBook.propTypes = {
  filteredValue: PropTypes.string.isRequired,
  onChangefilter: PropTypes.func.isRequired,
};
