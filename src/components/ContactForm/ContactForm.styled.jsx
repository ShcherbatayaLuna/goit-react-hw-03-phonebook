import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 20px;
  border: 2px solid black;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 250px;
  padding: 8px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
   display: flex;
  justify-content: center;
  align-items: center;

  width: 85px;
  padding: 6px;
  border: 1px solid lightgray;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  background-color: white;
  cursor: pointer;

  :hover,
  :focus {
    border: 1px solid #9a20bc;
    background-color: #e589ff;
  }
`;
