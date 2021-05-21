import styled from "styled-components";
import React from "react";

export const ImageButton = () => {
  return (
    <Item>
      <Image />
      <Button>To destination</Button>
    </Item>
  );
};

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  height: 20rem;
  width: 100vw;
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
`;

export const Container = styled.div`
  display: flex;
`;
export const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 0.8;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: #555;
  color: white;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: white;
  }
`;

export const CarouselWraper = styled.div``;
