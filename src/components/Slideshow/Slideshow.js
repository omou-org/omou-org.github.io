import React from "react";
import Carousel from "react-material-ui-carousel";
import Items from "../Items/Items";

const Slideshow = ({ images }) => {
  return (
    <Carousel autoPlay animation="fade">
      {images.map((image) => (
        <Items item={image} />
      ))}
    </Carousel>
  );
};

export default Slideshow;
