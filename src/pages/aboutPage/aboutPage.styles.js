import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 200rem;
  width: 100%;
  margin-bottom: 2rem;
`;

export const Paragraph = styled.p`
  font-size: 1em;
  color: black;
  margin-bottom: 1em;
  border: 1px solid black;
  border-radius: 4px;
  padding: 1em;
`;

export const Title = styled.h4`
  font-size: 4em;
  color: black;
  font-family: "Pattaya", sans-serif;
`;

export const ImageContainer = styled.div`
  background-color: #386983;
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Image = styled.img`
  height: 20rem;
  width: 30em;
  border-radius: 5em;
  position: relative;
`;

export const ImageButton = () => {
  return (
    <ImageContainer>
      <Image src="https://res.cloudinary.com/dyfedllac/image/upload/v1621354429/Despre_proiect_lyvhef.jpg" />
    </ImageContainer>
  );
};
