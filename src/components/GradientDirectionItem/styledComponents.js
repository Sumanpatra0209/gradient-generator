// Style your elements here
import styled from 'styled-components/macro'

export const ListItem = styled.li`
  width: 50%;
  list-style-type: none;
  @media screen and (min-width: 768px) {
    width: 25%;
  }
`

export const DirectionButton = styled.button`
  text-align: center;
  color: ${props => (props.isActive ? '#334155' : ' #1e293b')};
  background-color: #ffffff79;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 600;
  width: 100%;
  border-radius: 5px;
  border: none;
  padding: 16px;
  margin-bottom: 10px;
  outline: none;
  cursor: pointer;
`
