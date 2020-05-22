import React from "react";
import Carousel from "./Carousel";
import Items from "../Items/Items";

const Slideshow = ({ images, path }) => {
  return (
    <Carousel autoPlay animation="fade" fullHeightHover="false">
      {images.map((image) => (
        <Items item={image} path={path} />
      ))}
    </Carousel>
  );
};

export default Slideshow;
