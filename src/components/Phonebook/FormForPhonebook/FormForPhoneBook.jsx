import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { ButtonAdd } from './FormForPhoneBook.styled';
import {
  StyledForm,
  StyledField,
  StyledLabel,
} from './FormForPhoneBook.styled';

const schema = yup.object().shape({
  name: yup.string().required('Please enter first and last name'),
  number: yup
    .string()
    .min(10)
    .max(18)
    .required('Please enter the phone number in the format +380932600501'),
});

export const FormForPhoneBook = ({ onSubmit, data }) => {
  const handleSubmitFormik = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmitFormik}
      validationSchema={schema}
    >
      <StyledForm>
        {data.length > 0 && (
          <p>
            You have: {data.length}
            {data.length === 1 ? ' contact' : ' contacts'} in your phonebook
          </p>
        )}
        {/* onSubmit={this.handleSubmit} */}
        <StyledLabel>
          Name
          <StyledField
            placeholder="Name Surname"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            // value={name}
            // onChange={this.handleAddContact}
          />
          <ErrorMessage name="name" component="div" />
        </StyledLabel>
        <StyledLabel>
          Number
          <StyledField
            placeholder="+380932600501"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            // value={number}
            // onChange={this.handleAddContact}
          />
          <ErrorMessage name="number" component="div" />
        </StyledLabel>
        <ButtonAdd type="submit">Add contact</ButtonAdd>
      </StyledForm>
    </Formik>
  );
};

FormForPhoneBook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
