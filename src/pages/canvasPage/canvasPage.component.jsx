import React, { useState, useEffect } from "react";

import { Container } from "./canvasPage.styles.js";

import ImageMapper from "react-img-mapper";

import { AspectRatio } from "@chakra-ui/react";

import Canvas from "react-responsive-canvas";

import Modal from "react-bootstrap/Modal";
import ModalFooter from "react-bootstrap/ModalFooter";

import { imageMapResize } from "image-map-resizer";

import { useWindowSize } from "../../components/functions/window-resize";
import "./canvasPage.css";

import DialogBox from "../../components/dialog/dialog.component";

import { Stage, Layer, Star, Text } from "react-konva";

const CanvasPage = ({ history }) => {
  const [show, setShow] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const URL =
    "https://res.cloudinary.com/dyfedllac/image/upload/v1621151357/decalculat_hlodof.svg";
  const URL2 =
    "https://res.cloudinary.com/dyfedllac/image/upload/v1621172643/et1_yvvdit.jpg";
  const MAP = {
    name: "my-map",
    areas: [
      {
        id: 0,
        name: "parter",
        shape: "rect",
        coords: [3, 821, 1262, 889],
      },
      {
        id: 1,
        name: "et1",
        shape: "rect",
        coords: [0, 672, 1283, 817],
      },
      {
        id: 2,
        name: "et2",
        shape: "rect",
        coords: [4, 541, 1284, 673],
      },
      {
        id: 3,
        name: "et3",
        shape: "rect",
        coords: [4, 421, 1283, 541],
      },
      {
        id: 4,
        name: "et4",
        shape: "rect",
        coords: [3, 290, 1283, 421],
      },
      {
        id: 5,
        name: "et5",
        shape: "rect",
        coords: [0, 170, 1281, 292],
      },
      {
        id: 6,
        name: "et6",
        shape: "rect",
        coords: [5, -16, 1284, 171],
      },
    ],
  };

  return (
    <Container>
      <div className="container">
        <Modal
          animation={true}
          closeTimeoutMS={500}
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="contained-modal-title-vcenter"
          classname="modal"
        >
          <Modal.Header
            className="modal-header"
            closeButton
            onClick={() => history.push("/canvas")}
          >
            <Modal.Title className="modal-title">
              Alegeti Apartamentul
            </Modal.Title>
          </Modal.Header>
          <Modal.Body bsPrefix size="lg" className="modal-body">
            <ImageMapper
              src={URL2}
              fillColor="rgba(26, 28, 89, 0.4)"
              strokeColor=""
              onClick={() => setShow(true)}
              classname="img-1"
              imgWidth={500}
              parentWidth={dimensions.height}
              responsive
            />
          </Modal.Body>
        </Modal>
      </div>
      <div className="">
        <ImageMapper
          src={URL}
          map={MAP}
          fillColor="rgba(26, 28, 89, 0.4)"
          strokeColor="red"
          onClick={() => setShow(true)}
          imgWidth={dimensions.width}
          parentWidth={700}
          responsive={true}
          className="first"
        />
      </div>
    </Container>
  );
};

export default CanvasPage;

// <map name="image-map">
//       <area
//         shape="poly"
//         coords="299,172,300,152,126,137,122,153"
//         href="https://res.cloudinary.com/dyfedllac/image/upload/v1620987527/cladirRandata_gipgy2.jpg"
//         alt="parter"
//       />
//       <area
//         shape="poly"
//         coords="299,152,300,133,125,122,125,137"
//         href="https://res.cloudinary.com/dyfedllac/image/upload/v1620987527/cladirRandata_gipgy2.jpg"
//         alt="et1"
//       />
//       <area
//         shape="poly"
//         coords="298,132,299,109,125,108,126,122"
//         href="https://res.cloudinary.com/dyfedllac/image/upload/v1620987527/cladirRandata_gipgy2.jpg"
//         alt="et2"
//       />
//     </map>
