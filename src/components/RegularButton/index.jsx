import "./style.css";
export const RegularButton = ({ color, size, content, text_color, link }) => {
  const goTo = (a) => {
    window.open(a, "_self");
  };

  return (
    <button
      style={{ backgroundColor: color, color: text_color, padding: size }}
      className="btn"
      onClick={goTo(link)}
    >
      {content}
    </button>
  );
};
