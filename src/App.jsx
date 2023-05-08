import { useState } from "react";
import "./App.css";

// imports
import { imagesArray } from "./data/imagesArray";
import Image from "./components/Image/Image";
import Button from "./components/Button/Button";

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
        {images &&
          images.map((image, i) =>
            current === i ? (
              <Image image={image.imageURL} index={image.id} key={image.id} />
            ) : (
              ""
            )
          )}
      </section>

      <section className="btn">
        <Button displayPreviousImage={displayPreviousImage} id="previous" />
        <Button displayNextImage={displayNextImage} id="next" />
      </section>
    </>
  );
}

export default App;
