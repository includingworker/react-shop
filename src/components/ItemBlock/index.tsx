import React from "react";

type ItemBlockProps = {
  imageUrl: string;
  title: string;
  description: string;
};

export const ItemBlock: React.FC<ItemBlockProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <div className="product">
      <img src={imageUrl} alt="Img" />
      <div className="desc">
        <span>{title}</span>
        <p>{description}</p>
      </div>
    </div>
  );
};
