import React from "react";
import Carousel from "react-material-ui-carousel";
import Items from "../Items/Items";

const Slideshow = ({ images, path }) => {
  return (
    <Carousel autoPlay animation="fade">
      {images.map((image) => (
        <Items item={image} path={path} />
      ))}
    </Carousel>
  );
};

export default Slideshow;
