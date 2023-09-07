import React from "react";
import Link from "next/link";

export default function CategoryCard({ data }) {
  return (
    <Link href={"/shop/fullwidth-4col"}>
      <a className="category-card">
        <div className="category-card__background">
          <img src={data.image} alt={data.category} />
        </div>
        <div className="category-card__content">
          <h3>{data.category}</h3>
          <h5>{data.quantity} items</h5>
        </div>
      </a>
    </Link>
  );
}
