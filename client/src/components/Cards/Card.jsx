import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

export const Card = ({ array, img }) => {
  return (
    <>
      <div className="container">
        {array.length ? (
          array.map((p) => (
            <Link to={`/pokemon/${p.id}`} key={p.name}>
              <figure className={p.type}>
                <div className="cardImageContainer">
                  <img src={p.img} alt="" className="CardImage" />
                </div>
                <div className="cardCaption">
                  <h1 className="cardName">Id:{p.idPoke ? `${p.idPoke}` : p.id}</h1>
                  {p.type.length === 2 ? (
                    <div className="types">
                      <h3 className="cardType">{p.type[0]}</h3>
                      <h3 className="cardType">{p.type[1]}</h3>
                    </div>
                  ) : (
                    <div className="types">
                      <h3 className="cardType">{p.type[0]}</h3>
                    </div>
                  )}
                  <div className="cardName">{p.name}</div>
                </div>
              </figure>
            </Link>
          ))
        ) : (
          <img
            src={
              array.info
                ? "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/02/Pokemon-404-page.jpg"
                : img
            }
            alt="Not found"
          />
        )}
      </div>
    </>
  );
};
