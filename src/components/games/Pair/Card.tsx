import "./pair.css";
import React, { memo } from "react";
import { ICard } from "../../../types/types";
import { useDispatch } from "react-redux";
import { actionOpenCloseCard } from "../../../redux/actions/actions";

const Card = ({ id, guessed, icon, open }: ICard) => {
  const dispatch = useDispatch();
  const handlerCard = () => dispatch(actionOpenCloseCard(id));

  return (
    <div className="cardWrapper">
      {!guessed ? (
        <>
          <div
            className={open ? "card_face" : "card_face_active"}
            onClick={handlerCard}
          >
            <img className="card_img" src={icon} />
          </div>
          <div
            className={open ? "card_back" : "card_back_active"}
            onClick={handlerCard}
          >
            ?
          </div>
        </>
      ) : (
        <div className="card_face_guessed">
          <img className="card_img" src={icon} />
        </div>
      )}
    </div>
  );
};

export default memo(Card);
