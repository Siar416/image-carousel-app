const Button = ({ displayPreviousImage, displayNextImage, id }) => {
  return (
    <button
      id={displayPreviousImage ? "previous" : "next"}
      onClick={displayPreviousImage ? displayPreviousImage : displayNextImage}
    >
      {id === "next" ? "next" : "previous"}
    </button>
  );
};

export default Button;
