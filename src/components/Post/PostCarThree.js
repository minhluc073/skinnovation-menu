import React from "react";
import Link from "next/link";

export default function PostCarThree({ data }) {
  return (
    <div className="post-card-three">
      <Link
        href={"/blog/post/[slug]"}
        as={"/blog/post/" + data.slug}
      >
        <a className="post-card-three__image">
          <img
            src={data.thumbImage}
            alt={data.title}
          />
        </a>
      </Link>
      <div className="post-card-three__content">
        <Link
          href={"/blog/post/[slug]"}
          as={"/blog/post/" + data.slug}
        >
          <a>{data.title}</a>
        </Link>
        <p>{data.publicDate}</p>
      </div>
    </div>
  );
}
