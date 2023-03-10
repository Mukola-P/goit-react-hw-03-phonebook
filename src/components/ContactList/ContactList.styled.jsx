import styled from 'styled-components';

export const ContactListStyle = styled.ul`
  margin-top: 20px;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const ButtonForDelete = styled.button`
  padding: 4px;
  border: 2px solid #290723;
  border-radius: 4px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  color: #21201e;
  background-color: #e6df97;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.12);
    color: #21201e;
    background-color: #f9f7f9;
  }
`;