import React from "react";
import {
  Button,
  CarouselWraper,
  Container,
  Image,
  Item,
  SocialContainer,
} from "./carousel.styles";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./carousel.styles.css";
import "./FramerCarousel.css";
import { InstagramFilled, FacebookFilled } from "@ant-design/icons";
import { Card } from "antd";

import { FramerCarousel } from "./FramerCarousel";
import "./FramerCarousel.css";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const { Meta } = Card;
const Carousels = () => {
  const imageState = {
    items: [
      {
        id: 1,
        url: "https://res.cloudinary.com/dyfedllac/image/upload/v1620982483/cladire3_eugdbx.jpg",
        title: "building1",
      },
      {
        id: 2,
        url: "https://res.cloudinary.com/dyfedllac/image/upload/v1620982483/cladire1_gqskwc.jpg",
        title: "building2",
      },
      {
        id: 3,
        url: "https://res.cloudinary.com/dyfedllac/image/upload/v1620982483/cladire3_eugdbx.jpg",
        title: "building3",
      },
      {
        id: 4,
        url: "https://res.cloudinary.com/dyfedllac/image/upload/v1620982483/cladire2_wtn6ap.jpg",
        title: "building4",
      },
      {
        id: 5,
        url: "https://res.cloudinary.com/dyfedllac/image/upload/v1620982483/cladire3_eugdbx.jpg",
        title: "building5",
      },
    ],
  };
  const { items } = imageState;

  return (
    <div className="example-container">
      <FramerCarousel />
    </div>
  );
};

export default Carousels;

// <CarouselWraper>
//       <Carousel
//         autoplay={false}
//         centerMode={true}
//         emulateTouch
//         infiniteLoop={true}
//         onScroll
//         showStatus={false}
//         showIndicators={true}
//         showArrows={false}
//         swipeable
//         verticalSwipe={"standard"}
//         transitionTime={2000}
//       >
//         {items.map((item) => (
//           <Item>
//             <Card
//               hoverable
//               bordered={true}
//               cover={<Image src={item.url} alt="" />}
//             >
//               <Meta
//                 title="S.C. Arena Residence S.R.L "
//                 avatar={
//                   <SocialContainer>
//                     <a href="https://www.facebook.com/arenaresidencebacau">
//                       <FacebookFilled />
//                     </a>
//                     <a href="https://www.instagram.com/arena_residence_bacau/">
//                       <InstagramFilled />
//                     </a>
//                   </SocialContainer>
//                 }
//               />
//             </Card>
//           </Item>
//         ))}
//       </Carousel>
//     </CarouselWraper>
