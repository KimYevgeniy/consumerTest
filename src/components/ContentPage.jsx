import React from "react";
import { useState } from "react";

import assets from "./assets";

const ContentPage = ({ onGoBackClick }) => {
  const [randomImage, setRandomImage] = useState(null);
  const [remainingImages, setRemainingImages] = useState(assets);
  const [counter, setCounter] = useState(0);

  const moveToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const pickRandomImage = () => {
    if (remainingImages.length === 0) {
      onGoBackClick();
      return;
    }
    setCounter(counter + 1);
    const randomIndex = Math.floor(Math.random() * remainingImages.length);
    const pickedImage = remainingImages[randomIndex];

    setRandomImage(pickedImage);
    setRemainingImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages.splice(randomIndex, 1);
      return updatedImages;
    });

    moveToTop();
  };

  return (
    <div>
      <h1>{counter}/18</h1>
      {randomImage && (
        <div>
          <img src={randomImage} alt="Random" style={{ width: "100%" }} />
        </div>
      )}
      {/* <button onClick={onGoBackClick}>Закончить</button> */}
      <button onClick={pickRandomImage}>Следующая картинка</button>
    </div>
  );
};

export default ContentPage;
