import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  .buttonStyle: active{
    background-color: #fa923f;
    opacity: 0.5
  }
  `;

export const Button = styled.button`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border: 2px solid;
  border-radius: 3px;
  padding: 10px;
`;

export const Toolbar = styled.div`
  .toolbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: ${({ theme }) => theme.toolbar};
    height: 56px;
  }
`;
