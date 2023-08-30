import React from "react";
import ImageCard from "./ImageCard";

const ImageComponent = ({ imageInfo }) => {
  return (
    <div className="wrapper">
      <div className="container">
        <h1>Photo Gallery</h1>
        <div className="grid">
          {imageInfo.map((curVal, id) => {
            return <ImageCard key={id} myData={curVal} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;
