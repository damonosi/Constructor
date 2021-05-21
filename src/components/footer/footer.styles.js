import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logoCladire.svg";

export const FooterContainer = styled.div`
  height: 30rem;
  font-size: 16px;
  line-height: 36px;
  border-radius: 3px;

  clear: both;
  color: #fff;
  text-align: center;

  background-color: #c60000;
  display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoContainer = styled(Link)`
  height: 15em;
  width: 15em;
  display: flex;
  align-items: center;
  align-self: center;

  @media screen and (max-width: 800px) {
    height: 5em;
    width: 5em;
  }
`;
export const Logos = styled(Logo)`
  height: 20em;
  width: 20em;
  cursor: auto;
  @media screen and (max-width: 800px) {
    height: 5em;
    width: 5em;
  }
`;

export const InfoContainer = styled.div`
  border-radius: 30px;
  padding: 0.5rem;
  color: white;
  background-color: red;
  display: flex;
  flex-direction: column;
  position: absolute;
  cursor: auto;
`;

export const TextContainer = styled.p`
  font-size: 2vw;
  justify-content: center;

  margin: 0;
  align-self: center;
`;

export const Paragraph = styled.p`
  font-size: 2vw;
`;
export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1em;
  position: relative;
`;
