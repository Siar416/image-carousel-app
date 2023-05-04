import { useState } from "react";
import "./App.css";

const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
];

function App() {
  const [current, setCurrent] = useState(images[0]);

  const displayNextImage = () => {};

  const displayPreviousImage = () => {};

  return (
    <>
      <section>
        <h1>Image Carousel App</h1>
        <img src={current} alt="animal" />
      </section>

      <section>
        <button id="previous" onClick={(e) => displayPreviousImage(e)}>
          Previous
        </button>
        <button id="next" onClick={(e) => displayNextImage(e)}>
          Next
        </button>
      </section>
    </>
  );
}

export default App;
