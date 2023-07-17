import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTours }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article key={id} className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "Show less" : "Read more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTours(id)}>
          Not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
