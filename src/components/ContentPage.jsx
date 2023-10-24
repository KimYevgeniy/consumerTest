import React from "react";
import { useState, useEffect } from "react";

import assets from "./assets";

const ContentPage = ({ onGoBackClick }) => {
  const [images, setImages] = useState(assets);

  useEffect(() => {
    const preloadImages = () => {
      const loadedImages = [];
      const imagePromises = assets.map((imageUrl) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = imageUrl;
          img.onload = () => {
            loadedImages.push(img);
            resolve();
          };
        });
      });

      Promise.all(imagePromises).then(() => {
        setImages(loadedImages);
      });
    };

    preloadImages();
  }, [assets]);

  const [randomImage, setRandomImage] = useState(null);
  const [remainingImages, setRemainingImages] = useState(images);
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
      <h1 style={{ width: "90%" }}>
        {counter === 0 ? "Здравствуйте! Нажмите начать" : `${counter}/18`}
      </h1>
      {randomImage && (
        <div>
          <img src={randomImage} alt="Random" style={{ width: "100%" }} />
        </div>
      )}
      {/* <button onClick={onGoBackClick}>Закончить</button> */}
      <button
        onClick={pickRandomImage}
        style={{
          marginTop: 10,
          marginBottom: 25,
          backgroundColor: "turquoise",
          color: "black",
        }}
      >
        {counter === 0 ? "НАЧАТЬ" : "Следующая страница"}
      </button>
    </div>
  );
};

export default ContentPage;
