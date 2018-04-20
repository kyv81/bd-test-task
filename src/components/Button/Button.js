import styled from 'styled-components';

const Button = styled.button`
  margin-right: 13px;
  background-color: #a60436;
  border: none;
  border-bottom: 3px solid #4d0219;
  border-radius: 7px;
  padding: 12px 40px;
  color: #fff;
  font-size: 15px;
  outline: none;

  &:hover {
    background-color: #d20444;
    border-bottom: 1px solid #4d0219;
    margin-top: 2px;
  }
`;

export default Button;
