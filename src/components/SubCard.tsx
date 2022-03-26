import React from "react";
import cardImage from "../img/card-img.jpeg";
import musicIcon from "../img/music-icon.jpeg";

type Props = {};

const SubCard = (props: Props) => {
  return (
    <section className="card">
      <CardImage />
      <div className="card__details">
        <CardInfo />
        <CardSub />
        <ActionBtn />
      </div>
    </section>
  );
};

export default SubCard;

const CardImage = () => (
  <div className="card__image-container">
    <img
      src={cardImage}
      alt="svg illustration of someone listening and dancing to music"
      className="card__image"
    />
  </div>
);

const CardInfo = () => {
  return (
    <article className="card__article">
      <h2 className="card__header">order summary</h2>
      <p className="card__desc">
        You can now listen to millions of songs, audiobooks and podcasts on any
        device anywhere you like!
      </p>
    </article>
  );
};
const CardSub = () => (
  <section className="card__sub">
    {/* <div className="card__music__icon__container"> */}
    <img src={musicIcon} alt="music icon" className="card__music__icon" />
    {/* </div> */}
    <span className="card__sub__details">
      <span>Annual plan</span> $59.99/year
    </span>
    <button>Change</button>
  </section>
);

const ActionBtn = () => (
  <>
    <button className="proceed__btn">Proceed to Payment</button>
    <button className="cancel__btn"> Cancel Order</button>
  </>
);
