import React from "react";
import { Container } from "react-bootstrap";
import "./style.scss";

export default React.memo(function Background({ hotComics }) {
  const swap = () => {
    const stack = document.querySelector(".stack");
    const cardAll = document.querySelectorAll(".card");
    const number = cardAll.length - 2;
    const card = document.querySelector(".card:last-child");
    const cardId = document.querySelector(".card:nth-child(" + number + ")");
    card.style.animation = "swap 700ms forwards";
    setTimeout(() => {
      card.style.animation = "";
      stack?.prepend(card);
    }, 700);
  };

  return (
    <div className="container_Slide">
      <Container>
        <div className="stack">
          {hotComics.map((e) => {
            return (
              <div key={e._id} onClick={swap} className="card ">
                <img id={e._id} className="img-fluid" src={e.image} />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
})