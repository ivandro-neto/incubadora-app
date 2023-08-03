import "./style.css";
import { RegularButton } from "../RegularButton";
export const Box = ({
  title,
  slogan,
  description,
  image,
  buttons,
  listed,
  listData,
  small,
}) => {
  const blur = document.querySelectorAll(".blur-img");
  blur.forEach(div => {
    const img = div.querySelector("img");
    
    const loaded = () => div.classList.add("loaded");
  
    if (img.complete) {
      loaded()
    } else {
      img.addEventListener("load", loaded)
    }
    
  })

  return (
    <div className="box">
      <div
        className="box-img blur-img"
        style={{ backgroundImage: `url(${small})` }}
      >
        <img src={image} alt="Logo" loading="lazy" />
      </div>
      <div className="box-content">
        <div
          className="content"
          style={{
            justifyContent: buttons === false ? "flex-start" : "space-between",
          }}
        >
          <div className="content-header">
            <h1 className="title">
              <strong
                style={{ display: listed === true ? "none" : "inline-block" }}
              >
                Nome da Startup:
              </strong>
              {title}
            </h1>
            <span
              className="slogan"
              style={{ display: buttons === false ? "none" : "flex" }}
            >
              <strong>Slogan: </strong>"{slogan}"
            </span>
          </div>
          <p
            className="description"
            style={{ display: listed === true ? "none" : "flex" }}
          >
            <strong>Descrição:</strong>
            {description}
          </p>
          <ul
            className="box-list"
            style={{
              display: listed === false ? "none" : "flex",
            }}
          >
            {listData.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div
            className="btn-container-box"
            style={{ display: buttons === false ? "none" : "flex" }}
          >
            <RegularButton
              color={"#F3B700"}
              size={"15px 20px"}
              content={"Investir"}
              text_color={"white"}
              link={"#"}
            />
            <RegularButton
              color={"#FFF"}
              size={"15px 20px"}
              content={"Ver mais"}
              text_color={"#13293D"}
              link={"#"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
