import styled from 'styled-components';


export const List = styled.ul`
width: 450px;
padding: 20px;
margin: 0;
`
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  margin: 0;
  margin-right: 15px;
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
