import React from "react";
import Link from "next/link";

export const BreadcrumbItem = ({ name, href, current }) => {
  return (
    <li className={current && "active"}>
      {href ? (
        <Link href={href}>
          <a>{name}</a>
        </Link>
      ) : (
        name
      )}
    </li>
  );
};
export const Breadcrumb = ({ title, children }) => {
  return (
    <div className="breadcrumb">
      <div className="container">
        <h2>{title}</h2>
        <ul>{children}</ul>
      </div>
    </div>
  );
};
