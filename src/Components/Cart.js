import React, { useState } from "react";
import styled from "styled-components";

const CardStyled = styled.div`
  width: 100%;

  img {
    width: 100%;
    border-radius: 0.5rem;
  }

  .flip-inner {
    transform-style: preserve-3d;
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform linear 0.4s;
    /* &:hover {
      transform: rotateY(180deg);
    } */
  }

  .flip-front,
  .flip-back {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    backface-visibility: hidden;
  }

  .flip-back {
    transform: rotateY(180deg);
  }

  .transform-card {
    transform: rotateY(180deg);
  }
`;

function Cart({
  image,
  currentChoose = false,
  handOnclickCard,
  isDone = false,
}) {
  // const [isShowBackImage, setIsShowBackImage] = useState(false);
  // const handleOnclick = () => {
  //   setIsShowBackImage(true);
  // };
  console.log(currentChoose);
  return (
    <CardStyled>
      <div
        className={` flip-inner ${currentChoose ? "transform-card" : ""}`}
        onClick={handOnclickCard}
      >
        <div className="flip-front">
          <img
            src={isDone?"https://en.pimg.jp/037/667/905/1/37667905.jpg":"https://64.media.tumblr.com/7ece81f58b54c4b7afa43a7e3db5f4f7/tumblr_n1n77kRqhr1qa8kbzo1_500.png"}
            alt="image"
          />
        </div>
        <div className="flip-back">
          <img src={image} />
        </div>
      </div>
    </CardStyled>
  );
}

export default Cart;
