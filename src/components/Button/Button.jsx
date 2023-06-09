import "./Button.css";

const Button = ({ displayPreviousImage, displayNextImage, id }) => {
  return (
    <button
      id={displayPreviousImage ? "previous" : "next"}
      onClick={displayPreviousImage ? displayPreviousImage : displayNextImage}
    >
      {id === "next" ? "Next" : "Previous"}
    </button>
  );
};

export default Button;
