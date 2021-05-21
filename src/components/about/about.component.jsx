import React from "react";

import { Item, Paragraph, Title, Image, ImageContainer } from "./about.styles";

const About = () => {
  return (
    <Item>
      <ImageContainer>
        <Image src="https://res.cloudinary.com/dyfedllac/image/upload/v1621502074/macheta_easajs.jpg" />
      </ImageContainer>

      <Paragraph>
        Suntem dezvoltatorii imobiliari S.C Arena Residence S.R.L
      </Paragraph>

      <Paragraph>
        Avem finalizate urmatoarele Proiecte: <br /> Prieteniei nr. 26 tronsolul
        A si tronsonul B . Cartierul de case Small Town, Rezidential P+5
        Prieteniei 89-91, Rezidential P+6 1Mai 60 si Rezidential P+6 SAtefan cel
        Mare 32 A
      </Paragraph>

      <Paragraph>
        Birou vanzari Arena Residence: Str. Stefan cel Mare 32A/parter, SPATIUL
        COMERCIAL nr.01. <br /> Programari la nr. de mobil: 0773 332 598 sau
        0727 339 499
      </Paragraph>
    </Item>
  );
};

export default About;
