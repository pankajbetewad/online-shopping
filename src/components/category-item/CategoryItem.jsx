import React from "react";
import "./CategoryItem.scss";

const CategoryItem = (props) => {
  const { title, id, imageUrl } = props.category;
  return (
    <div className="category-container" key={id}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>shop now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
