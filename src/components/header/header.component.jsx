import React, { useState } from "react";

import { HomeOutlined } from "@ant-design/icons";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  Logos,
  OptionLink,
} from "./header.styles";

const Header = () => {
  const [isToggled, setToggle] = useState(false);
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logos />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/about">Despre Noi</OptionLink>
        <OptionLink to="/canvas">Alege apartamentul</OptionLink>
        <OptionLink to="/localizare">Localizare</OptionLink>
      </OptionsContainer>
    </HeaderContainer>
  );
};

export default Header;
