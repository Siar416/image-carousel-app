import { useState } from "react";
import "./App.css";

// imports
import imagesArray from "./data/imagesArray";

function App() {
  const [images] = useState(imagesArray);
  const [current, setCurrent] = useState(0);

  const displayNextImage = () => {
    setCurrent((currentImage) =>
      currentImage === images.length - 1 ? 0 : current + 1
    );
  };

  const displayPreviousImage = () => {
    setCurrent((currentImage) =>
      currentImage === 0 ? images.length - 1 : current - 1
    );
  };

  return (
    <>
      <section>
        <h1>Image Carousel App</h1>
        {images.map((image, i) =>
          current === i ? (
            <img className="image" key={i} src={image} alt="animal" />
          ) : (
            ""
          )
        )}
      </section>

      <section className="btn">
        <button id="previous" onClick={displayPreviousImage}>
          Previous
        </button>
        <button id="next" onClick={displayNextImage}>
          Next
        </button>
      </section>
    </>
  );
}

export default App;
