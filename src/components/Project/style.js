import styled from "styled-components";

export const ProjectContainer = styled.div`
  display: flex;
  border: 2px solid grey;
  width: 100%;
  height: 50px;
  margin-top: 10px;
  justify-content: space-between;
`;

export const Button = styled.button.attrs(props => ({...props}))`
  color: ${props => props.disabled ? '#ccc' : 'inherit'};
`
