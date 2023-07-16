import { styled } from 'styled-components'

export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`
export const DropdownButton = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }
  background-color: transparent;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  &:hover,
  &:focus {
    border-color: rgb(154, 72, 241);
  }
  :not(:last-child) {
    margin-right: 10px;
  }
  :active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
  }
  ${(props) =>
    props.active &&
    ` border: 1px solid rgb(154, 72, 241);
  border-color: rgb(154, 72, 241);
  color: rgb(154, 72, 241);`}
`
export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: rgb(49, 49, 49);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  :hover {
    background-color: #ddd;
  }

  ${(props) =>
    props.show &&
    ` display: block; 
    color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  :hover {
    background-color: #ddd;
  }`}
`