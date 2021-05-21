import React from "react";

import {
  FooterContainer,
  LogoContainer,
  Logos,
  InfoContainer,
  Paragraph,
  TextContainer,
  SocialContainer,
} from "./footer.styles";

import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <FooterContainer>
      <InfoContainer>
        <LogoContainer to="/">
          <Logos />
        </LogoContainer>
        <TextContainer>
          <Paragraph>0727 339 499</Paragraph>
          <Paragraph>Office@arena-residence.ro</Paragraph>
          <SocialContainer>
            <a href="https://www.facebook.com/arenaresidencebacau">
              <FacebookOutlined />
            </a>
            <a href="https://www.instagram.com/arena_residence_bacau/">
              <InstagramOutlined />
            </a>
          </SocialContainer>
        </TextContainer>
      </InfoContainer>
    </FooterContainer>
  );
};

export default Footer;
