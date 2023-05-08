const Image = ({ image, index }) => {
  return <img className="image" key={index} src={image} alt="animal" />;
};

export default Image;
