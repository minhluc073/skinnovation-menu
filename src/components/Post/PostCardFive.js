import Link from "next/link";
import { convertToSlug } from "../../common/utils";

export default function PostCardFive({ data }) {
  return (
    <div className="post-card-five">
      <Link
        href={"/blog/post/[slug]"}
        as={"/blog/post/" + data.slug}
      >
        <a className="post-card-five__image">
          <img
            src={data.thumbImage}
            alt={data.title}
          />
          <div className="post-card-five__date">
            <h5>05</h5>
            <p>Feb</p>
          </div>
        </a>
      </Link>
      <div className="post-card-five__content">
        <div className="post-card-five__content__info">
          <p>
            by <span>{data.author}</span>
          </p>
          <Link
            href={
              
              "/blog/category/" +
              convertToSlug(data.category)
            }
          >
            <a>{data.category}</a>
          </Link>
        </div>
        <Link
          href={"#"}
          as={"#"}
        >
          <a className="post-card-five__content__title">{data.title}</a>
        </Link>
        <p className="post-card-five__content__description">
          {data.description}
        </p>
      </div>
    </div>
  );
}
