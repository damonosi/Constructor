import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 5rem;
`;

export const Paragraph = styled.p`
  font-size: 1em;
  color: #fff;
  margin-bottom: 1em;
  padding: 2rem;
  margin-bottom: 2em;
`;

export const Title = styled.h4`
  font-size: 4vw;
  color: #fff;
  margin-bottom: 2em;
`;
export const ImageContainer = styled.div`
  display: flex;
  align-self: flex-end;
  width: 16em;
  justify-content: center;
  position: relative;
`;

export const Image = styled.img`
  height: 10em;
  width: 15em;
  border-radius: 5em;
  position: relative;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.01);
  }
`;
