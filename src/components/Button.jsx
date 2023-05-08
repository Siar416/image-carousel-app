const Button = ({ displayPreviousImage, displayNextImage }) => {
  return (
    <button
      id={displayPreviousImage ? "previous" : "next"}
      onClick={displayPreviousImage ? displayPreviousImage : displayNextImage}
    >
      Previous
    </button>
  );
};

export default Button;
