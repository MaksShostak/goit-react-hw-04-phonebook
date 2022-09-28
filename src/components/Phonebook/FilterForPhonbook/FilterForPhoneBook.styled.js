import styled from 'styled-components';

export const FilterLabelStyled = styled.label`
  margin-bottom: ${({ theme }) => theme.space[5]}px;
  font-size: ${({ theme }) => theme.fontSizes.ml};
`;
export const StyledInput = styled.input`
  padding-left: ${({ theme }) => theme.space[4]}px;
  display: block;
  height: 40px;
  width: 400px;
  font-size: ${({ theme }) => theme.fontSizes.ml};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.mycolor};
  transition: all 300ms ease-in-out;
  border: 4px solid;
  &:hover,
  :focus,
  :active {
    background-color: ${({ theme }) => theme.colors.accent};
    border: 4px solid;
    border-color: ${({ theme }) => theme.colors.mycolor};
    transform: scale(1.01);
    box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.black};
  }
`;
