import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logoCladire.svg";

const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  background-color: #060606;
  height: 4em;
  width: 100%;

  display: flex;
  align-items: center;
  align-self: center;
  justify-content: space-between;
  top: 0;
  padding: 1em;
  position: fixed;
  z-index: 3;
  margin-bottom: 10em;
  @media screen and (max-width: 800px) {
    height: 60px;

    margin-bottom: 20px;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 800px) {
    width: 80%;
    height: 5em;
    width: 5em;
  }
`;

export const OptionButton = styled.button`
  background-color: lightblue;

  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
  padding: 1em;
  align-items: center;
  text-decoration: none;
  color: #f8f8f8;
  font-family: "Pattaya", sans-serif;

  :hover {
    color: #42d948;
  }
  @media screen and (max-width: 800px) {
    font-size: 0.5em;
  }
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;

export const LogoContainer = styled(Link)`
  height: 5em;
  width: 5em;
  display: flex;
  align-items: center;
  align-self: center;
  @media screen and (max-width: 800px) {
    height: 5em;
    width: 5em;
  }
`;

export const Logos = styled(Logo)`
  height: 5em;
  width: 5em;
  @media screen and (max-width: 800px) {
    height: 5em;
    width: 5em;
  }
`;
